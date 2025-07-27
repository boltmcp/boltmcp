import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["usage_date","updated_at"]).optional(),
  "desc": z.enum(["usage_date","updated_at"]).optional()
}