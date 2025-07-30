import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "approved_cost": z.number().int().optional(),
  "body": z.string(),
  "recipients": z.array(z.object({ "recipient_id": z.number().int(), "recipient_type": z.enum(["alliance","character","corporation","mailing_list"]) }).describe("recipient object")).min(1).max(50),
  "subject": z.string(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}