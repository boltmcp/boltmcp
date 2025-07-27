import { z } from "zod"

export const inputParamsSchema = {
  "is": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "is_not": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "lt": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "lte": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "gt": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "gte": z.string().regex(new RegExp("^-?\\d+$")).optional(),
  "between": z.string().regex(new RegExp("^\\[-?\\d+,-?\\d+\\]$")).optional()
}