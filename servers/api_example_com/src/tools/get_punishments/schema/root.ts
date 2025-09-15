import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().describe("Page number").optional(),
  "limit": z.number().describe("Number of items per page").optional(),
  "sort": z.enum(["ASC","DESC"]).describe("Sort by ascending or descending").optional(),
  "search": z.string().describe("Search query for filtering").optional()
}