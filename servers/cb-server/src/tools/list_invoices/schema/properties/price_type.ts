import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["tax_exclusive","tax_inclusive"]).describe("\\* \\`tax_exclusive\\` - All amounts in the document are exclusive of tax. \\* \\`tax_inclusive\\` - All amounts in the document are inclusive of tax.\n").optional(),
  "is_not": z.enum(["tax_exclusive","tax_inclusive"]).describe("\\* \\`tax_exclusive\\` - All amounts in the document are exclusive of tax. \\* \\`tax_inclusive\\` - All amounts in the document are inclusive of tax.\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(tax_exclusive|tax_inclusive)(,(tax_exclusive|tax_inclusive))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(tax_exclusive|tax_inclusive)(,(tax_exclusive|tax_inclusive))*\\]$")).optional()
}