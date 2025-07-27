import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().regex(new RegExp("^\\d{10}$")).optional(),
  "before": z.string().regex(new RegExp("^\\d{10}$")).optional(),
  "on": z.string().regex(new RegExp("^\\d{10}$")).optional(),
  "between": z.string().regex(new RegExp("^\\[\\d{10},\\d{10}\\]$")).optional()
}