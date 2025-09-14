import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the share to update."),
  "description": z.string().describe("A user-defined description that will be displayed to people visiting the shared media.").optional(),
  "expires": z.number().int().gte(0).describe("The time at which the share expires. Given as milliseconds since 1970, or zero to remove the expiration.").optional()
}