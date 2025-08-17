import { z } from "zod"

export const inputParamsSchema = {
  "alarm_id": z.string(),
  "id": z.union([z.string(), z.null()]).optional(),
  "status": z.union([z.string(), z.null()]).optional(),
  "acknowledged_by": z.union([z.string(), z.null()]).optional(),
  "acknowledged_by_name": z.union([z.string(), z.null()]).optional(),
  "acknowledged_by_email": z.union([z.string(), z.null()]).optional(),
  "acknowledged_at": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "acknowledgment_comment": z.union([z.string(), z.null()]).optional(),
  "comment": z.union([z.string(), z.null()]).optional()
}