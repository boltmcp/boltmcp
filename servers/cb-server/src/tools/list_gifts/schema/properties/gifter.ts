import { z } from "zod"

export const inputParamsSchema = {
  "customer_id": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customer_id` to the tool, first call the tool `expandSchema` with \"/properties/gifter/properties/customer_id\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Gifter customer id.\n</property-description>").optional()
}