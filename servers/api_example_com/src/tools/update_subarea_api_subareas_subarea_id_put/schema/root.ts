import { z } from "zod"

export const inputParamsSchema = {
  "subarea_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "area_id": z.union([z.string().uuid(), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional()
}