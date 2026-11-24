import { getCollection, type CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'articulos'>;

// Fecha de hoy en Madrid (AAAA-MM-DD) para la publicación programada.
function hoyMadrid(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid' }).format(new Date());
}
const dia = (d: Date) => d.toISOString().slice(0, 10);

let comprobado = false;
// Devuelve solo los artículos que ya tocan: publicado: true y fecha <= hoy.
// Si un artículo marcado como publicado contiene [VERIFICAR], el build se para.
export async function getPublicados(): Promise<Articulo[]> {
  const todos = await getCollection('articulos');
  if (!comprobado) {
    const malos = todos.filter((a) => a.data.publicado && /\[VERIFICAR/i.test((a.body ?? '') + JSON.stringify(a.data)));
    if (malos.length) {
      throw new Error('Artículos con [VERIFICAR] pendiente: ' + malos.map((a) => a.id).join(', '));
    }
    comprobado = true;
  }
  const hoy = hoyMadrid();
  return todos
    .filter((a) => a.data.publicado && dia(a.data.fecha) <= hoy)
    .sort((a, b) => b.data.fecha.getTime() - a.data.fecha.getTime());
}

export const urlArticulo = (a: Articulo) => `/${a.data.categoria}/${a.id}/`;

export function minutosLectura(texto: string): number {
  const palabras = texto.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 220));
}

export function fechaLarga(d: Date): string {
  return new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}
