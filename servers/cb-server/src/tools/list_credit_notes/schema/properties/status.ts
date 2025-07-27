import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["adjusted","refunded","refund_due","voided"]).describe("\\* \\`adjusted\\` - When the Credit Note has been adjusted against an invoice. \\* \\`refunded\\` - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \\* \\`refund_due\\` - When the credits are yet to be used, or have been partially used. \\* \\`voided\\` - When the Credit Note has been cancelled.\n").optional(),
  "is_not": z.enum(["adjusted","refunded","refund_due","voided"]).describe("\\* \\`adjusted\\` - When the Credit Note has been adjusted against an invoice. \\* \\`refunded\\` - When the entire credits (Credit Note amount) have been used (i.e either allocated to invoices or refunded). \\* \\`refund_due\\` - When the credits are yet to be used, or have been partially used. \\* \\`voided\\` - When the Credit Note has been cancelled.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(adjusted|refunded|refund_due|voided)(,(adjusted|refunded|refund_due|voided))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(adjusted|refunded|refund_due|voided)(,(adjusted|refunded|refund_due|voided))*\\]$")).optional()
}