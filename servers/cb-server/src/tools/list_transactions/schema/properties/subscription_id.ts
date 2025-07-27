import { z } from "zod"

export const inputParamsSchema = {
  "is": z.string().min(1).optional(),
  "is_not": z.string().min(1).optional(),
  "starts_with": z.string().min(1).optional(),
  "is_present": z.enum(["true","false"]).optional(),
  "in": z.string().regex(new RegExp("^\\[(.*)(,.*)*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(.*)(,.*)*\\]$")).optional()
}