import { defineCollection, z } from 'astro:content';

const chapterSchema = z.object({
  title: z.string(),
  ebook: z.string(),
  order: z.number(),
});

const articleSchema = z.object({
  title: z.string(),
  ebook: z.string(),
  chapterSlug: z.string(),
  order: z.number(),
});

export const collections = {
  chapters: defineCollection({ schema: chapterSchema }),
  articles: defineCollection({ schema: articleSchema }),
};
