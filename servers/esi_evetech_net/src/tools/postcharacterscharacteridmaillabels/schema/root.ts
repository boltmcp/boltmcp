import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "color": z.enum(["#0000fe","#006634","#0099ff","#00ff33","#01ffff","#349800","#660066","#666666","#999999","#99ffff","#9a0000","#ccff9a","#e6e6e6","#fe0000","#ff6600","#ffff01","#ffffcd","#ffffff"]).describe("Hexadecimal string representing label color, in RGB format").optional(),
  "name": z.string(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}