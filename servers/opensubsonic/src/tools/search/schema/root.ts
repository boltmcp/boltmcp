import { z } from "zod"

export const inputParamsSchema = {
  "artist": z.string().describe("Artist to search for.").optional(),
  "album": z.string().describe("Album to search for.").optional(),
  "title": z.string().describe("Song title to search for.").optional(),
  "any": z.boolean().describe("Searches all fields.").optional(),
  "count": z.number().int().gte(0).describe("Maximum number of results to return.").optional(),
  "offset": z.number().int().gte(0).describe("Search result offset. Used for paging.").optional(),
  "newerThan": z.number().int().gte(0).describe("Only return matches that are newer than this. Given as milliseconds since 1970.").optional()
}