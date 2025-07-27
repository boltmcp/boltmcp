import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["on","off"]).describe("\\* \\`on\\` - Whenever an invoice is created, an automatic attempt to charge the customer's payment method is made. \\* \\`off\\` - Automatic collection of charges will not be made. All payments must be recorded offline.\n").optional(),
  "is_not": z.enum(["on","off"]).describe("\\* \\`on\\` - Whenever an invoice is created, an automatic attempt to charge the customer's payment method is made. \\* \\`off\\` - Automatic collection of charges will not be made. All payments must be recorded offline.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(on|off)(,(on|off))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(on|off)(,(on|off))*\\]$")).optional()
}