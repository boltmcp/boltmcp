import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["active","archived"]).describe("\\* \\`active\\` - Active \\* \\`archived\\` - Archived\n").optional(),
  "is_not": z.enum(["active","archived"]).describe("\\* \\`active\\` - Active \\* \\`archived\\` - Archived\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(active|archived)(,(active|archived))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(active|archived)(,(active|archived))*\\]$")).optional()
}