import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("Page number").optional(),
  "per_page": z.number().int().gte(1).lte(100).describe("Items per page").optional(),
  "tag_id": z.union([z.string(), z.null()]).describe("Filter by tag UUID").optional(),
  "alarm_type": z.union([z.string(), z.null()]).describe("Filter by alarm type").optional(),
  "status": z.union([z.string(), z.null()]).describe("Filter by status").optional(),
  "active_only": z.union([z.boolean(), z.null()]).describe("Filter by active alarms only").optional()
}