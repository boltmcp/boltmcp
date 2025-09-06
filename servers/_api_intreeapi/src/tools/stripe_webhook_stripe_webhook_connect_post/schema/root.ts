import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "object": z.string(),
  "account": z.union([z.string(), z.null()]).optional(),
  "created": z.number().int(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "livemode": z.boolean(),
  "type": z.string(),
  "Stripe-Signature": z.string()
}