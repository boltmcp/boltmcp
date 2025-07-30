import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "labels": z.array(z.number().int()).min(1).max(25).describe("Fetch only mails that match one or more of the given labels").optional(),
  "last_mail_id": z.number().int().describe("List only mail with an ID lower than the given ID, if present").optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}