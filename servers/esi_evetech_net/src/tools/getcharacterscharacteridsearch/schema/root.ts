import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "categories": z.array(z.enum(["agent","alliance","character","constellation","corporation","faction","inventory_type","region","solar_system","station","structure"])).min(1).max(11).describe("Type of entities to search for"),
  "search": z.string().describe("The string to search on"),
  "strict": z.boolean().describe("Whether the search should be a strict match").optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}