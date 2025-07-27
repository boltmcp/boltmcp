import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["not_redeemed","redeemed","archived"]).describe("\\* \\`not_redeemed\\` - Can be applied to a subscription. \\* \\`redeemed\\` - Cannot be applied to a subscription as the coupon code has been already used. \\* \\`archived\\` - Cannot be applied to a subscription as it has been made inactive.\n").optional(),
  "is_not": z.enum(["not_redeemed","redeemed","archived"]).describe("\\* \\`not_redeemed\\` - Can be applied to a subscription. \\* \\`redeemed\\` - Cannot be applied to a subscription as the coupon code has been already used. \\* \\`archived\\` - Cannot be applied to a subscription as it has been made inactive.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(not_redeemed|redeemed|archived)(,(not_redeemed|redeemed|archived))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(not_redeemed|redeemed|archived)(,(not_redeemed|redeemed|archived))*\\]$")).optional()
}