import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "tier": z.enum(["base","pro"]),
  "promo_code": z.union([z.string(), z.null()]).describe("Customer facing promo/discount code.").optional(),
  "customer": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customer` to the tool, first call the tool `expandSchema` with \"/properties/customer\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>DTO for a Stripe Customer.</property-description>")
}