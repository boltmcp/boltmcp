import { z } from "zod"

export const inputParamsSchema = {
  "action": z.enum(["create","createAndUpdate"]).describe("Accepts create OR createAndUpdate. Defaults to createAndUpdate").optional(),
  "listIds": z.string().uuid().describe("Accepts uuids, comma separated, of existing listIds. Defaults to empty").optional(),
  "shouldNumberLookup": z.boolean().describe("Should run number lookups billable to the account. *Minimum charge applies. Defaults to false").optional(),
  "delimiter": z.string().describe("Csv contents delimiter. Must be single character. Defaults to ','").optional()
}