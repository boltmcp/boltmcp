import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The artist name."),
  "count": z.number().int().gte(0).describe("The maximum number of songs to return.").optional()
}