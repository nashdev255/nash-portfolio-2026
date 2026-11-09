import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("Engineering"),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const works = defineCollection({
  loader: glob({ base: "./src/content/works", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    role: z.string().optional(),
    stack: z.array(z.string()).default([]),
    category: z.enum(["Web", "App", "Research", "Other"]).default("Other"),
    featured: z.boolean().default(false),
    demoUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { articles, works };
