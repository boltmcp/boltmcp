import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int().gte(0).lte(500).describe("The maximum number of songs to return. Max 500.").optional(),
  "genre": z.string().describe("Only returns songs belonging to this genre.").optional(),
  "fromYear": z.number().int().describe("(Since 1.9.0) Only return songs from this year or later.").optional(),
  "toYear": z.number().int().describe("Only return songs published before or in this year.").optional(),
  "musicFolderId": z.string().describe("Only return songs in the music folder with the given ID. See `getMusicFolders`.").optional()
}