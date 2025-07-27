import { z } from "zod"

export const inputParamsSchema = {
  "is": z.literal("fixed").describe("\\* \\`fixed\\` - Fixed `bundle_configurations.type` appears when you create a bundle plan that cannot be updated during checkout or subscription creation.\n").optional(),
  "is_not": z.literal("fixed").describe("\\* \\`fixed\\` - Fixed `bundle_configurations.type` appears when you create a bundle plan that cannot be updated during checkout or subscription creation.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(fixed)(,(fixed))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(fixed)(,(fixed))*\\]$")).optional()
}