import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["active","inactive"]).describe("\\* \\`active\\` - active \\* \\`inactive\\` - inactive\n").optional(),
  "is_not": z.enum(["active","inactive"]).describe("\\* \\`active\\` - active \\* \\`inactive\\` - inactive\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(active|inactive)(,(active|inactive))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(active|inactive)(,(active|inactive))*\\]$")).optional()
}