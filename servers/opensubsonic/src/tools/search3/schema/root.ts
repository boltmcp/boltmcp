import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().describe("Search query. Servers must support an empty query and return all the data to allow clients to properly access all the media information for offline sync."),
  "artistCount": z.number().int().gte(0).describe("Maximum number of artists to return.").optional(),
  "artistOffset": z.number().int().gte(0).describe("Search result offset for artists. Used for paging.").optional(),
  "albumCount": z.number().int().gte(0).describe("Maximum number of albums to return.").optional(),
  "albumOffset": z.number().int().gte(0).describe("Search result offset for albums. Used for paging.").optional(),
  "songCount": z.number().int().gte(0).describe("Maximum number of songs to return.").optional(),
  "songOffset": z.number().int().gte(0).describe("Search result offset for songs. Used for paging.").optional(),
  "musicFolderId": z.string().describe("(Since 1.12.0) Only return albums in the music folder with the given ID. See `getMusicFolders`.").optional()
}