import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const goodies = defineCollection({
  loader: glob({ base: "./src/goodies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    name: z.string(),
    type: z.string().optional(),
    description: z.string().optional(),
    url: z.string().url(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, goodies };
