import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["increment","decrement"]).describe("\\* \\`increment\\` - Increment \\* \\`decrement\\` - Decrement\n").optional(),
  "is_not": z.enum(["increment","decrement"]).describe("\\* \\`increment\\` - Increment \\* \\`decrement\\` - Decrement\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(increment|decrement)(,(increment|decrement))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(increment|decrement)(,(increment|decrement))*\\]$")).optional()
}