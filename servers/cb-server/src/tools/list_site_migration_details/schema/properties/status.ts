import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["moved_in","moved_out","moving_out"]).describe("\\* \\`moved_in\\` - Moved in from another cb site \\* \\`moved_out\\` - Moved out from one cb site to another \\* \\`moving_out\\` - Moving out from one cb site to another\n").optional(),
  "is_not": z.enum(["moved_in","moved_out","moving_out"]).describe("\\* \\`moved_in\\` - Moved in from another cb site \\* \\`moved_out\\` - Moved out from one cb site to another \\* \\`moving_out\\` - Moving out from one cb site to another\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(moved_in|moved_out|moving_out)(,(moved_in|moved_out|moving_out))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(moved_in|moved_out|moving_out)(,(moved_in|moved_out|moving_out))*\\]$")).optional()
}