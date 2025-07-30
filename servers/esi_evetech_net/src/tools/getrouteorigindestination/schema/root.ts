import { z } from "zod"

export const inputParamsSchema = {
  "destination": z.number().int().describe("destination solar system ID"),
  "origin": z.number().int().describe("origin solar system ID"),
  "avoid": z.array(z.number().int()).max(100).describe("avoid solar system ID(s)").optional(),
  "connections": z.array(z.array(z.number().int()).min(2).max(2)).max(100).describe("connected solar system pairs").optional(),
  "flag": z.enum(["shortest","secure","insecure"]).describe("route security preference").optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}