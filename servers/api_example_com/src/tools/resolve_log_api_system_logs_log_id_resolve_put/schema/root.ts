import { z } from "zod"

export const inputParamsSchema = {
  "log_id": z.string(),
  "resolved": z.union([z.boolean(), z.null()]).optional(),
  "resolved_by": z.union([z.string(), z.null()]).optional()
}