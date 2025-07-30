import { z } from "zod"

export const inputParamsSchema = {
  "body": z.string(),
  "recipients": z.array(z.number().int().describe("recipient integer")).min(1).max(50),
  "subject": z.string(),
  "to_corp_or_alliance_id": z.number().int().optional(),
  "to_mailing_list_id": z.number().int().describe("Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field").optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}