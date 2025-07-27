import { z } from "zod"

export const inputParamsSchema = {
  "asc": z.enum(["effective_from","updated_at"]).optional(),
  "desc": z.enum(["effective_from","updated_at"]).optional()
}