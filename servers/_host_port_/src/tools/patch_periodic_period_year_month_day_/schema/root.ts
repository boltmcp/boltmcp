import { z } from "zod"

export const inputParamsSchema = {
  "year": z.number().describe("The year of the date for which you would like to grab a periodic note."),
  "month": z.number().describe("The month (1-12) of the date for which you would like to grab a periodic note."),
  "day": z.number().describe("The day (1-31) of the date for which you would like to grab a periodic note."),
  "period": z.enum(["daily","weekly","monthly","quarterly","yearly"]).describe("The name of the period for which you would like to grab a periodic note."),
  "Operation": z.enum(["append","prepend","replace"]).describe("Patch operation to perform"),
  "Target-Type": z.enum(["heading","block","frontmatter"]).describe("Type of target to patch"),
  "Target-Delimiter": z.string().describe("Delimiter to use for nested targets (i.e. Headings)").optional(),
  "Target": z.string().describe("Target to patch; this value can be URL-Encoded and *must*\nbe URL-Encoded if it includes non-ASCII characters.\n"),
  "Trim-Target-Whitespace": z.enum(["true","false"]).describe("Trim whitespace from Target before applying patch?").optional()
}