import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["date","updated_at"]).optional(),
  "desc": z.enum(["date","updated_at"]).optional()
}