import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Pool address with 0x prefix")
}