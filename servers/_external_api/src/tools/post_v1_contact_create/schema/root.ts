import { z } from "zod"

export const inputParamsSchema = {
  "existingContact": z.enum(["ignore","update"]).describe("ignore or update already existing contact").optional(),
  "shouldNumberLookup": z.enum(["true","false"]).describe("Should run number lookups billable to the account. *Minimum charge applies. Defaults to false").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}