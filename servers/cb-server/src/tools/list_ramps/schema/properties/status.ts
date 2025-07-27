import { z } from "zod"

export const inputParamsSchema = {
  "in": z.string().regex(new RegExp("^\\[(scheduled|succeeded|failed|draft)(,(scheduled|succeeded|failed|draft))*\\]$")).optional(),
  "is": z.enum(["scheduled","succeeded","failed","draft"]).describe("\\* \\`scheduled\\` - Status of the subscription schedule on creation. \\* \\`succeeded\\` - The execution status of the schedule if success. \\* \\`failed\\` - The execution status of the schedule if failed. \\* \\`draft\\` - Status of the subscription schedule considering as draft\n").optional()
}