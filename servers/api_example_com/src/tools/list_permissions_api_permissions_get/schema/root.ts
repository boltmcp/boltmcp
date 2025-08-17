import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Items per page").optional(),
  "user_id": z.union([z.string(), z.null()]).describe("Filter by user UUID").optional(),
  "permission_type": z.union([z.string(), z.null()]).describe("Filter by permission type").optional(),
  "entity_id": z.union([z.string(), z.null()]).describe("Filter by entity UUID").optional(),
  "active_only": z.boolean().describe("Show only active permissions").optional()
}