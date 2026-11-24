import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE } from '../config';
import { getPublicados, urlArticulo } from '../lib/articulos';

export async function GET(context: APIContext) {
  const arts = await getPublicados();
  return rss({
    title: SITE.nombre,
    description: SITE.lema,
    site: context.site!,
    items: arts.map((a) => ({ title: a.data.h1, description: a.data.descripcion, pubDate: a.data.fecha, link: urlArticulo(a) })),
    customData: '<language>es-es</language>',
  });
}
