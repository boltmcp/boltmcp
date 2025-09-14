import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the media file to bookmark. If a bookmark already exists for this file it will be overwritten."),
  "position": z.number().int().describe("The position (in milliseconds) within the media file."),
  "comment": z.string().describe("A user-defined comment.").optional()
}