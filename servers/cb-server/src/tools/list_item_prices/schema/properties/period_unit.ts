import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["day","week","month","year"]).describe("\\* \\`day\\` - A period of 24 hours. \\* \\`week\\` - A period of 7 days. \\* \\`month\\` - A period of 1 calendar month. \\* \\`year\\` - A period of 1 calendar year.\n").optional(),
  "is_not": z.enum(["day","week","month","year"]).describe("\\* \\`day\\` - A period of 24 hours. \\* \\`week\\` - A period of 7 days. \\* \\`month\\` - A period of 1 calendar month. \\* \\`year\\` - A period of 1 calendar year.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(day|week|month|year)(,(day|week|month|year))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(day|week|month|year)(,(day|week|month|year))*\\]$")).optional()
}