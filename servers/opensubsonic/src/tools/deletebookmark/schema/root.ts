import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the media file for which to delete the bookmark. Other users’ bookmarks are not affected.")
}