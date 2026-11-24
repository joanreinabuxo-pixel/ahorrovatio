import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),            // <title> y Google
    h1: z.string(),                // título visible
    descripcion: z.string(),
    categoria: z.enum(['placas-solares', 'aerotermia', 'tarifas-luz', 'subvenciones', 'ahorro-hogar']),
    fecha: z.coerce.date(),        // día en que se publica (publicación programada)
    actualizado: z.coerce.date().optional(),
    publicado: z.boolean().default(false),
    pilar: z.boolean().default(false),
    imagen: z.string().optional(),
    imagenAlt: z.string().optional(),
    relacionados: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    fuentes: z.array(z.object({ nombre: z.string(), url: z.string().default(''), consultado: z.coerce.date().optional() })).default([]),
  }),
});

export const collections = { articulos };
