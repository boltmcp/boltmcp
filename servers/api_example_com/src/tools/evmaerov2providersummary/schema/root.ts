import { z } from "zod"

export const inputParamsSchema = {
  "wallet_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Liquidity provider address with 0x prefix")
}