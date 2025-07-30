import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().describe("The ID of the character"),
  "description": z.string(),
  "items": z.array(z.object({ "flag": z.enum(["Cargo","DroneBay","FighterBay","HiSlot0","HiSlot1","HiSlot2","HiSlot3","HiSlot4","HiSlot5","HiSlot6","HiSlot7","Invalid","LoSlot0","LoSlot1","LoSlot2","LoSlot3","LoSlot4","LoSlot5","LoSlot6","LoSlot7","MedSlot0","MedSlot1","MedSlot2","MedSlot3","MedSlot4","MedSlot5","MedSlot6","MedSlot7","RigSlot0","RigSlot1","RigSlot2","ServiceSlot0","ServiceSlot1","ServiceSlot2","ServiceSlot3","ServiceSlot4","ServiceSlot5","ServiceSlot6","ServiceSlot7","SubSystemSlot0","SubSystemSlot1","SubSystemSlot2","SubSystemSlot3"]).describe("Fitting location for the item. Entries placed in 'Invalid' will be discarded. If this leaves the fitting with nothing, it will cause an error."), "quantity": z.number().int(), "type_id": z.number().int() }).describe("item object")).min(1).max(512),
  "name": z.string(),
  "ship_type_id": z.number().int(),
  "Accept-Language": z.enum(["en","de","fr","ja","ru","zh","ko","es"]).describe("The language to use for the response. Defaults to 'en'.").optional(),
  "If-None-Match": z.string().describe("The ETag of the previous request. A 304 will be returned if this matches the current ETag.").optional(),
  "X-Compatibility-Date": z.string().date().describe("The compatibility date for the request."),
  "X-Tenant": z.string().describe("The tenant ID for the request. Defaults to 'tranquility'.").optional()
}