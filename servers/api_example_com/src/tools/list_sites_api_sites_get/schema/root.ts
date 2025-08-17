import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Items per page").optional(),
  "company_id": z.union([z.string(), z.null()]).describe("Filter by company UUID").optional(),
  "search": z.union([z.string(), z.null()]).describe("Search by name").optional(),
  "active_only": z.boolean().describe("Show only active sites").optional(),
  "show_hidden": z.boolean().describe("Include hidden sites").optional()
}