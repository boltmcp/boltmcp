import { z } from "zod"

export const inputParamsSchema = {
  "musicFolderId": z.string().describe("If specified, only return artists in the music folder with the given ID. See `getMusicFolders`.").optional(),
  "ifModifiedSince": z.number().int().describe("If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).").optional()
}