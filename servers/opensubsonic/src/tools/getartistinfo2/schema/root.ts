import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The artist, album or song ID."),
  "count": z.number().int().gte(0).describe("Max number of similar artists to return.").optional(),
  "includeNotPresent": z.boolean().describe("Whether to return artists that are not present in the media library.").optional()
}