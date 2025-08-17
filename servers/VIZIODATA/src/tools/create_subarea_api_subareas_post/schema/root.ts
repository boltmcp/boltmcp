import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "area_id": z.union([z.string().uuid(), z.null()]).optional(),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional()
}