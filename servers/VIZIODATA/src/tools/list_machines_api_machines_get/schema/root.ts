import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Items per page").optional(),
  "area_id": z.union([z.string(), z.null()]).describe("Filter by area UUID").optional(),
  "search": z.union([z.string(), z.null()]).describe("Search by name").optional(),
  "active_only": z.boolean().describe("Show only active machines").optional(),
  "show_hidden": z.boolean().describe("Include hidden machines").optional()
}