import { z } from "zod"

export const inputParamsSchema = {
  "campaignId": z.string().uuid().describe("campaignId"),
  "action": z.enum(["update","createAndUpdate"]).describe("Work only with contacts that exist in your base, or also add new ones.").optional(),
  "data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `data` to the tool, first call the tool `expandSchema` with \"/properties/data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}