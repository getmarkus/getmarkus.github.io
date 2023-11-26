import { defineCollection, z } from 'astro:content';

const guides = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		// Transform string to Date object
        // 2022-07-01
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		image: z.string().optional(),
        // ["astro", "blogging", "learning in public"]
        tags: z.array(z.string()).optional(),
	}),
});

export const collections = { guides };