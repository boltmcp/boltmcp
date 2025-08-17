import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "description": z.union([z.string(), z.null()]).optional(),
  "layout_data": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `layout_data` to the tool, first call the tool `expandSchema` with \"/properties/layout_data\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Estrutura do layout em JSON</property-description>"),
  "visibility": z.string().describe("public|private|shared").optional()
}