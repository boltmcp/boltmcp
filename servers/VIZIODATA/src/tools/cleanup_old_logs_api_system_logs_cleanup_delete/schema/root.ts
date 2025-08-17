import { z } from "zod"

export const inputParamsSchema = {
  "days": z.number().int().gte(7).lte(365).describe("Delete logs older than N days").optional(),
  "dry_run": z.boolean().describe("Simulate cleanup without deleting").optional()
}