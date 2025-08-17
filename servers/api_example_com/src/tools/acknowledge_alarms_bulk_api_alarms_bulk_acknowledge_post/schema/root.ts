import { z } from "zod"

export const inputParamsSchema = {
  "alarm_ids": z.array(z.string()),
  "status": z.union([z.string(), z.null()]).optional(),
  "acknowledged_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "acknowledged_by": z.union([z.string(), z.null()]).optional(),
  "acknowledged_by_name": z.union([z.string(), z.null()]).optional(),
  "acknowledged_by_email": z.union([z.string(), z.null()]).optional(),
  "comment": z.union([z.string(), z.null()]).optional(),
  "acknowledgment_comment": z.union([z.string(), z.null()]).optional()
}