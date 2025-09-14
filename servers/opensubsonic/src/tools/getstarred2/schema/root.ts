import { z } from "zod"

export const inputParamsSchema = {
  "musicFolderId": z.string().describe("(Since 1.12.0) Only return albums in the music folder with the given ID. See `getMusicFolders`.").optional()
}