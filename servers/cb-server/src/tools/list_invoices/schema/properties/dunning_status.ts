import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["in_progress","exhausted","stopped","success"]).describe("\\* \\`in_progress\\` - Dunning is still in progress. \\* \\`exhausted\\` - Maximum number of attempts have been made. \\* \\`stopped\\` - Dunning has stopped for this invoice. \\* \\`success\\` - Payment successfully collected during dunning process.\n").optional(),
  "is_not": z.enum(["in_progress","exhausted","stopped","success"]).describe("\\* \\`in_progress\\` - Dunning is still in progress. \\* \\`exhausted\\` - Maximum number of attempts have been made. \\* \\`stopped\\` - Dunning has stopped for this invoice. \\* \\`success\\` - Payment successfully collected during dunning process.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(in_progress|exhausted|stopped|success)(,(in_progress|exhausted|stopped|success))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(in_progress|exhausted|stopped|success)(,(in_progress|exhausted|stopped|success))*\\]$")).optional(),
  "is_present": z.enum(["true","false"]).optional()
}