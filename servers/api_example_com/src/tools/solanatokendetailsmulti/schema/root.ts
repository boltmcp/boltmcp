import { z } from "zod"

export const inputParamsSchema = {
  "token_addresses": z.string().regex(new RegExp("^[1-9A-HJ-NP-Za-km-z]{32,44}(,[1-9A-HJ-NP-Za-km-z]{32,44})*$")).describe("Comma-separated Solana token mint addresses (max 50, base58). Example: So11111111111111111111111111111111111111112,DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263")
}