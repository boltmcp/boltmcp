import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "tier": z.enum(["base","pro"]),
  "promo_code": z.union([z.string(), z.null()]).describe("Customer facing promo/discount code.").optional()
}