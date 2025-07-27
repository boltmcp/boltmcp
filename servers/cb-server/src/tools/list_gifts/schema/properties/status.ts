import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["scheduled","unclaimed","claimed","cancelled","expired"]).describe("\\* \\`scheduled\\` - Gift has been scheduled. \\* \\`unclaimed\\` - Gift is not yet claimed and is ready to be claimed. \\* \\`claimed\\` - Gift is claimed. \\* \\`cancelled\\` - Gift is cancelled. \\* \\`expired\\` - Gift is expired.\n").optional(),
  "is_not": z.enum(["scheduled","unclaimed","claimed","cancelled","expired"]).describe("\\* \\`scheduled\\` - Gift has been scheduled. \\* \\`unclaimed\\` - Gift is not yet claimed and is ready to be claimed. \\* \\`claimed\\` - Gift is claimed. \\* \\`cancelled\\` - Gift is cancelled. \\* \\`expired\\` - Gift is expired.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(scheduled|unclaimed|claimed|cancelled|expired)(,(scheduled|unclaimed|claimed|cancelled|expired))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(scheduled|unclaimed|claimed|cancelled|expired)(,(scheduled|unclaimed|claimed|cancelled|expired))*\\]$")).optional()
}