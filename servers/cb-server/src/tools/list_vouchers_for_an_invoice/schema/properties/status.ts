import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["active","consumed","expired","failure"]).describe("\\* \\`active\\` - Active and ready to be consumed \\* \\`consumed\\` - Consumed for a transaction and cannot be used again \\* \\`expired\\` - Expired before consumed and cannot be used again \\* \\`failure\\` - Failed to create the voucher due to gateway rejection\n").optional(),
  "is_not": z.enum(["active","consumed","expired","failure"]).describe("\\* \\`active\\` - Active and ready to be consumed \\* \\`consumed\\` - Consumed for a transaction and cannot be used again \\* \\`expired\\` - Expired before consumed and cannot be used again \\* \\`failure\\` - Failed to create the voucher due to gateway rejection\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(active|consumed|expired|failure)(,(active|consumed|expired|failure))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(active|consumed|expired|failure)(,(active|consumed|expired|failure))*\\]$")).optional()
}