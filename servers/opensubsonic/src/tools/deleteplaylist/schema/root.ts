import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the playlist to delete, as obtained by `getPlaylists`.")
}