import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["manual","system_generated"]).describe("\\* \\`manual\\` - The order has been created by the the user using Chargebee's legacy order management system. \\* \\`system_generated\\` - The order has been created by Chargebee automatically based on the preferences set by the user.\n").optional(),
  "is_not": z.enum(["manual","system_generated"]).describe("\\* \\`manual\\` - The order has been created by the the user using Chargebee's legacy order management system. \\* \\`system_generated\\` - The order has been created by Chargebee automatically based on the preferences set by the user.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(manual|system_generated)(,(manual|system_generated))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(manual|system_generated)(,(manual|system_generated))*\\]$")).optional()
}