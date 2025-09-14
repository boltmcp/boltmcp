import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("(Since 1.9.0) If specified, only return the Podcast channel with this ID.").optional(),
  "includeEpisodes": z.boolean().describe("(Since 1.9.0) Whether to include Podcast episodes in the returned result.").optional()
}