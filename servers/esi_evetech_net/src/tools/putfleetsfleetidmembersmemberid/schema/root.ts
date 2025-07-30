import { z } from "zod"

export const inputParamsSchema = {
  "fleet_id": z.number().int().describe("ID for a fleet"),
  "member_id": z.number().int().describe("The character ID of a member in this fleet"),
  "role": z.enum(["fleet_commander","wing_commander","squad_commander","squad_member"]).describe("If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified."),
  "squad_id": z.number().int().optional(),
  "wing_id": z.number().int().optional(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}