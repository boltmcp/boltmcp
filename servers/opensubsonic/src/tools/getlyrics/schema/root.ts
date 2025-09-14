import { z } from "zod"

export const inputParamsSchema = {
  "artist": z.string().describe("The artist name.").optional(),
  "title": z.string().describe("The song title.").optional()
}