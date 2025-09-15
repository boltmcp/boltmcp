import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().describe("Page number").optional(),
  "limit": z.number().describe("Number of items per page").optional(),
  "sort": z.enum(["MonthTotal","AllTimeTotal"]).describe("Sort by monthly or all time votes").optional(),
  "search": z.string().describe("Search query for filtering").optional()
}