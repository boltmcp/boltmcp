import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "mail_id": z.number().int().describe("An EVE mail ID"),
  "labels": z.array(z.number().int().describe("label integer")).max(25).describe("Labels to assign to the mail. Pre-existing labels are unassigned.").optional(),
  "read": z.boolean().describe("Whether the mail is flagged as read").optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}