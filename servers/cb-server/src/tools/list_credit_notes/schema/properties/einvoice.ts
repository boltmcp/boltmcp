import { z } from "zod"

export const inputParamsSchema = {
  "status": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `status` to the tool, first call the tool `expandSchema` with \"/properties/einvoice/properties/status\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The status of processing the e-invoice. To obtain detailed information about the current \\`status\\`, see \\`message\\`.\n</property-description>").optional()
}