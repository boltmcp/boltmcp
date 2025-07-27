import { z } from "zod"

export const inputParamsSchema = {
  "in": z.string().regex(new RegExp("^\\[(.*)(,.*)*\\]$")).optional(),
  "is": z.string().min(1).optional()
}