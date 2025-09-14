import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The artist, album or song ID."),
  "count": z.number().int().gte(0).describe("Max number of songs to return.").optional()
}