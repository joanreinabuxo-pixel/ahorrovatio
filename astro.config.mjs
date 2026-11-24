// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Quita los enlaces internos que apuntan a páginas que no existen en el build
 * (por ejemplo, artículos programados que aún no se han publicado).
 * El texto del enlace se mantiene; solo desaparece la etiqueta <a>.
 */
function sinEnlacesRotos() {
  return {
    name: 'sin-enlaces-rotos',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const raiz = fileURLToPath(dir);
        const existe = async (ruta) => {
          const limpia = ruta.split(/[?#]/)[0];
          if (limpia === '/' || limpia === '') return true;
          const candidatos = [join(raiz, limpia), join(raiz, limpia, 'index.html')];
          for (const c of candidatos) {
            try { if ((await stat(c)).isFile()) return true; } catch {}
          }
          return false;
        };
        const html = [];
        const recorrer = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await recorrer(p);
            else if (e.name.endsWith('.html')) html.push(p);
          }
        };
        await recorrer(raiz);
        let quitados = 0;
        const re = /<a\b([^>]*?)\bhref="(\/[^"/][^"]*|\/)"([^>]*)>([\s\S]*?)<\/a>/g;
        for (const archivo of html) {
          const texto = await readFile(archivo, 'utf8');
          const partes = [];
          let ultimo = 0;
          let cambiado = false;
          for (const m of texto.matchAll(re)) {
            if (await existe(m[2])) continue;
            partes.push(texto.slice(ultimo, m.index), m[4]);
            ultimo = m.index + m[0].length;
            cambiado = true;
            quitados++;
            logger.info(`Enlace quitado en ${archivo.slice(raiz.length)}: ${m[2]}`);
          }
          if (cambiado) {
            partes.push(texto.slice(ultimo));
            await writeFile(archivo, partes.join(''));
          }
        }
        logger.info(`${quitados} enlace(s) a páginas no publicadas convertidos en texto.`);
      },
    },
  };
}

export default defineConfig({
  site: 'https://ahorrovatio.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') }), sinEnlacesRotos()],
});
