import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of a song in the play queue. Use one id parameter for each song in the play queue. Specify no IDs to clear").optional(),
  "currentIndex": z.number().int().gte(0).describe("The index of the current playing song. This is required if one or more IDs is provided.").optional(),
  "position": z.number().int().gte(0).describe("The position in milliseconds within the currently playing song.").optional()
}