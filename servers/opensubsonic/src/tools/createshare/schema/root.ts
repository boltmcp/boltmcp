import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("ID of a song, album or video to share. Use one id parameter for each entry to share."),
  "description": z.string().describe("A user-defined description that will be displayed to people visiting the shared media.").optional(),
  "expires": z.number().int().describe("The time at which the share expires. Given as milliseconds since 1970.").optional()
}