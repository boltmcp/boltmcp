import { z } from "zod"

export const inputParamsSchema = {
  "visibility": z.union([z.string(), z.null()]).describe("Filter by visibility (public, private, shared)").optional(),
  "search": z.union([z.string(), z.null()]).describe("Search in layout names").optional(),
  "active_only": z.boolean().describe("Show only active layouts").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Number of records to return").optional(),
  "offset": z.number().int().gte(0).describe("Number of records to skip").optional(),
  "per_page": z.union([z.number().int(), z.null()]).describe("Items per page (alias for limit)").optional()
}