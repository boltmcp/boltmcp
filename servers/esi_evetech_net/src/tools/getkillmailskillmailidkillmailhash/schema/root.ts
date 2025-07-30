import { z } from "zod"

export const inputParamsSchema = {
  "killmail_hash": z.string().describe("The killmail hash for verification"),
  "killmail_id": z.number().int().describe("The killmail ID to be queried"),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}