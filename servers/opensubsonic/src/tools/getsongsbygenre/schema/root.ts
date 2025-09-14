import { z } from "zod"

export const inputParamsSchema = {
  "genre": z.string().describe("The genre, as returned by `getGenres`."),
  "count": z.number().int().gte(0).lte(500).describe("The maximum number of songs to return. Max 500.").optional(),
  "offset": z.number().int().gte(0).describe("The offset. Useful if you want to page through the songs in a genre.").optional(),
  "musicFolderId": z.string().describe("(Since 1.12.0) Only return albums in the music folder with the given ID. See `getMusicFolders`.").optional()
}