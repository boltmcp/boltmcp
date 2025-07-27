import { z } from "zod"

export const inputParamsSchema = {
  "pc2_migration_id": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pc2_migration_id` to the tool, first call the tool `expandSchema` with \"/properties/pc2_migration_item_family/properties/pc2_migration_id\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>pc2_migration reference key\n</property-description>").optional()
}