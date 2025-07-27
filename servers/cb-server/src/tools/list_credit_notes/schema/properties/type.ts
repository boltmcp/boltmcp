import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["adjustment","refundable","store"]).describe("\\* \\`adjustment\\` - Adjustment Credit Note \\* \\`refundable\\` - Refundable Credit Note \\* \\`store\\` - Store Credit Note\n").optional(),
  "is_not": z.enum(["adjustment","refundable","store"]).describe("\\* \\`adjustment\\` - Adjustment Credit Note \\* \\`refundable\\` - Refundable Credit Note \\* \\`store\\` - Store Credit Note\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(adjustment|refundable|store)(,(adjustment|refundable|store))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(adjustment|refundable|store)(,(adjustment|refundable|store))*\\]$")).optional()
}