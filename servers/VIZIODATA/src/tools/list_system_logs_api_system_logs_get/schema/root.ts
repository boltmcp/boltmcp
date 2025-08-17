import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(500).describe("Items per page").optional(),
  "service": z.union([z.string(), z.null()]).describe("Filter by service").optional(),
  "level": z.union([z.string(), z.null()]).describe("Filter by log level").optional(),
  "start_date": z.union([z.string(), z.null()]).describe("Start date (YYYY-MM-DD)").optional(),
  "end_date": z.union([z.string(), z.null()]).describe("End date (YYYY-MM-DD)").optional(),
  "resolved": z.union([z.boolean(), z.null()]).describe("Filter by resolved status").optional(),
  "search": z.union([z.string(), z.null()]).describe("Search in message").optional()
}