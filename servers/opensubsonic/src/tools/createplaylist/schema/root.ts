import { z } from "zod"

export const inputParamsSchema = {
  "playlistId": z.string().describe("The playlist ID. Required if updating an existing playlist.").optional(),
  "name": z.string().describe("The human-readable name of the playlist. Required if creating a new playlist.").optional(),
  "songId": z.array(z.string()).describe("ID of a song in the playlist. Use one `songId` parameter for each song in the playlist.").optional()
}