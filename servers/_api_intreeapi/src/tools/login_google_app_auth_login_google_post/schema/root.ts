import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("ID token received from auth provider."),
  "device": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `device` to the tool, first call the tool `expandSchema` with \"/properties/device\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Input request DTO for creating a Device.</property-description>")
}