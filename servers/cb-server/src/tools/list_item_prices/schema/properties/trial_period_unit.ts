import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["day","month"]).describe("\\* \\`day\\` - A period of 24 hours. \\* \\`month\\` - A period of 1 calendar month.\n").optional(),
  "is_not": z.enum(["day","month"]).describe("\\* \\`day\\` - A period of 24 hours. \\* \\`month\\` - A period of 1 calendar month.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(day|month)(,(day|month))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(day|month)(,(day|month))*\\]$")).optional()
}