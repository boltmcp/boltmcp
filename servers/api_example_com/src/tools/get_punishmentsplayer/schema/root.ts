import { z } from "zod"

export const inputParamsSchema = {
  "player": z.string().describe("Player name"),
  "page": z.number().describe("Page number").optional(),
  "limit": z.number().describe("Number of items per page").optional(),
  "sort": z.enum(["ASC","DESC"]).describe("Sort by ascending or descending").optional()
}