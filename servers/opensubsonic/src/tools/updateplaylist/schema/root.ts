import { z } from "zod"

export const inputParamsSchema = {
  "playlistId": z.string().describe("The playlist ID."),
  "name": z.string().describe("The human-readable name of the playlist.").optional(),
  "comment": z.string().describe("The playlist comment.").optional(),
  "public": z.boolean().describe("`true` if the playlist should be visible to all users, `false` otherwise.").optional(),
  "songIdToAdd": z.array(z.string()).describe("Add this song with this ID to the playlist. Multiple parameters allowed.").optional(),
  "songIndexToRemove": z.array(z.number().int()).describe("Remove the song at this position in the playlist. Multiple parameters allowed.").optional()
}