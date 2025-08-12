import { z } from "zod"

export const inputParamsSchema = {
  "policyid": z.number().int(),
  "vdom": z.string().describe("Target VDOM (defaults to 'root')").optional()
}