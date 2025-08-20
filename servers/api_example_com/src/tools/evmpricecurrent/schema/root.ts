import { z } from "zod"

export const inputParamsSchema = {
  "token_address": z.string().describe("Address of the token prexied with 0x. See white listed tokens").optional(),
  "chain_id": z.number().int().describe("Chain id of the EVM")
}