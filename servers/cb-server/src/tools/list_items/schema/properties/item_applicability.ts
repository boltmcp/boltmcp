import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["all","restricted"]).describe("\\* \\`all\\` - all addon-items and charge-items are applicable to this plan-item. \\* \\`restricted\\` - only the addon-items or charge-items provided in `applicable_items` can be applied to this plan-item.\n").optional(),
  "is_not": z.enum(["all","restricted"]).describe("\\* \\`all\\` - all addon-items and charge-items are applicable to this plan-item. \\* \\`restricted\\` - only the addon-items or charge-items provided in `applicable_items` can be applied to this plan-item.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(all|restricted)(,(all|restricted))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(all|restricted)(,(all|restricted))*\\]$")).optional()
}