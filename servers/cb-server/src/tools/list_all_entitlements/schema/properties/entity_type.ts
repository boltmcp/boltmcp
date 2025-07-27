import { z } from "zod"

export const inputParamsSchema = {
  "in": z.string().regex(new RegExp("^\\[(plan|addon|charge|plan_price|addon_price)(,(plan|addon|charge|plan_price|addon_price))*\\]$")).optional(),
  "is": z.enum(["plan","addon","charge","plan_price","addon_price"]).describe("\\* \\`plan\\` - Plan \\* \\`addon\\` - Addon \\* \\`charge\\` - Charge \\* \\`plan_price\\` - Plan Price \\* \\`addon_price\\` - Addon Price\n").optional()
}