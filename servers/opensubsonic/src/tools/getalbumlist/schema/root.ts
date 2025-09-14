import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["random","newest","highest","frequent","recent","alphabeticalByName","alphabeticalByArtist","starred","byYear","byGenre"]).describe("The list type. Must be one of the following: random, newest, highest, frequent, recent. Since 1.8.0 you can also use alphabeticalByName or alphabeticalByArtist to page through all albums alphabetically, and starred to retrieve starred albums. Since 1.10.1 you can use byYear and byGenre to list albums in a given year range or genre."),
  "size": z.number().int().gte(1).lte(500).describe("The number of albums to return. Max 500.").optional(),
  "offset": z.number().int().gte(0).describe("The list offset. Useful if you for example want to page through the list of newest albums.").optional(),
  "fromYear": z.number().int().describe("Required if `type=='byYear'`. The first year in the range. If `fromYear` > `toYear` a reverse chronological list is returned.").optional(),
  "toYear": z.number().int().describe("Required if `type=='byYear'`. The last year in the range.").optional(),
  "genre": z.string().describe("Required if `type=='byGenre'`. The name of the genre, e.g., “Rock”.").optional(),
  "musicFolderId": z.string().describe("(Since 1.11.0) Only return albums in the music folder with the given ID. See `getMusicFolders`.").optional()
}