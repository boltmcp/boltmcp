import { z } from "zod"

export const inputParamsSchema = {
  "layout_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "layout_data": z.union([z.record(z.any()), z.null()]).optional(),
  "visibility": z.union([z.string(), z.null()]).optional()
}