import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the playlist to return, as obtained by `getPlaylists`.")
}