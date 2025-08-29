import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "name": z.string(),
  "appriseUrl": z.union([z.string(), z.null()]).optional(),
  "enabled": z.boolean().optional(),
  "groupId": z.string(),
  "householdId": z.string(),
  "options": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `options` to the tool, first call the tool `expandSchema` with \"/properties/options\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>These events are in-sync with the EventTypes found in the EventBusService.\nIf you modify this, make sure to update the EventBusService as well.</property-description>").optional(),
  "id": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}