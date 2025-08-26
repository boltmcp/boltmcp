import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "preliminary": z.boolean().describe("Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. NOTE: Preliminary reviews are not returned by default so if the entry is airing/publishing you need to add this otherwise you will get an empty list. e.g usage: `?preliminary=true`").optional(),
  "spoilers": z.boolean().describe("Any reviews that are tagged as a spoiler. Spoiler reviews are not returned by default. e.g usage: `?spoiler=true`").optional()
}