import { z } from "zod"

export const inputParamsSchema = {
  "chain_id": z.number().int().describe("EVM chain id"),
  "wallet_address": z.string().describe("Address that hold tokens prexied with 0x"),
  "whitelisted": z.boolean().describe("If true, only whitelisted tokens will be returned").optional()
}