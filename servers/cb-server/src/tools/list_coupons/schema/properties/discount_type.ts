import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["fixed_amount","percentage","offer_quantity"]).describe("\\* \\`fixed_amount\\` - The specified amount will be deducted. \\* \\`percentage\\` - The specified percentage will be deducted. \\* \\`offer_quantity\\` - The specified units will be offered without any deduction.\n").optional(),
  "is_not": z.enum(["fixed_amount","percentage","offer_quantity"]).describe("\\* \\`fixed_amount\\` - The specified amount will be deducted. \\* \\`percentage\\` - The specified percentage will be deducted. \\* \\`offer_quantity\\` - The specified units will be offered without any deduction.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(fixed_amount|percentage|offer_quantity)(,(fixed_amount|percentage|offer_quantity))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(fixed_amount|percentage|offer_quantity)(,(fixed_amount|percentage|offer_quantity))*\\]$")).optional()
}