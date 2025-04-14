import { defineCollection, z } from 'astro:content';

const chapterSchema = z.object({
  title: z.string(),
  ebook: z.string(),
  order: z.number(),
});

const articleSchema = z.object({
  title: z.string(),
  chapterSlug: z.string(),
  ebook: z.string(),
  order: z.number(),
});

export const collections = {
  'ebooks/elABCdelEntrenamiento/chapters': defineCollection({ schema: chapterSchema }),
  'ebooks/elABCdelEntrenamiento/articles': defineCollection({ schema: articleSchema }),
};
