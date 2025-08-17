import { z } from "zod"

export const inputParamsSchema = {
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional(),
  "tag_id": z.string().uuid(),
  "alarm_type": z.enum(["alert","alarm","emergency"]).describe("Tipos de alarme"),
  "condition_type": z.enum(["high","low","normal"]).describe("Tipos de condição do alarme"),
  "current_value": z.number(),
  "limit_value": z.number(),
  "status": z.string().optional(),
  "alarm_time": z.string().datetime({ offset: true }),
  "acknowledged_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "cleared_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "acknowledged_by": z.union([z.string().uuid(), z.null()]).optional(),
  "message": z.string(),
  "priority": z.number().int().optional()
}