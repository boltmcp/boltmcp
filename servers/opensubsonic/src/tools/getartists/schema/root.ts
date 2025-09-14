import { z } from "zod"

export const inputParamsSchema = {
  "musicFolderId": z.string().describe("If specified, only return artists in the music folder with the given ID. See `getMusicFolders`.").optional()
}