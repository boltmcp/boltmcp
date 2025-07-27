import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["fully_resent","partially_resent"]).describe("\\* \\`fully_resent\\` - Order is Fully resent \\* \\`partially_resent\\` - Order is Partially resent\n").optional(),
  "is_not": z.enum(["fully_resent","partially_resent"]).describe("\\* \\`fully_resent\\` - Order is Fully resent \\* \\`partially_resent\\` - Order is Partially resent\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(fully_resent|partially_resent)(,(fully_resent|partially_resent))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(fully_resent|partially_resent)(,(fully_resent|partially_resent))*\\]$")).optional()
}