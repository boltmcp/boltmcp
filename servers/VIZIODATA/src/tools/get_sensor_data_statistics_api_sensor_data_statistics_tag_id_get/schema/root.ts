import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).optional()
}