import { z } from "zod"

export const inputParamsSchema = {
  "alarm_id": z.string(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional(),
  "marked_for_deletion": z.union([z.boolean(), z.null()]).optional(),
  "status": z.union([z.enum(["active","acknowledged","cleared","suppressed"]).describe("Status do alarme"), z.null()]).optional(),
  "acknowledged_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "cleared_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "acknowledged_by": z.union([z.string().uuid(), z.null()]).optional(),
  "message": z.union([z.string(), z.null()]).optional(),
  "priority": z.union([z.number().int(), z.null()]).optional()
}