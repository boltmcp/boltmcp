import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["plan","addon"]).describe("\\* \\`plan\\` - PLAN \\* \\`addon\\` - ADDON\n").optional(),
  "is_not": z.enum(["plan","addon"]).describe("\\* \\`plan\\` - PLAN \\* \\`addon\\` - ADDON\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(plan|addon)(,(plan|addon))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(plan|addon)(,(plan|addon))*\\]$")).optional()
}