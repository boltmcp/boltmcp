import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().describe("Page number").optional(),
  "limit": z.number().describe("Number of items per page").optional(),
  "sort": z.enum(["playtime","worth","balance","votes","kdr","deaths","kills"]).describe("Sort by").optional(),
  "search": z.string().describe("Search query for filtering").optional()
}