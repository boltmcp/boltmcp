import { z } from "zod"

export const inputParamsSchema = {
  "pool_addresses": z.string().describe("Comma-separated pool addresses within the same DEX. Example: addr1,addr2,addr3")
}