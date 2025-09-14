import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the file (song) or folder (album/artist) to rate."),
  "rating": z.number().int().gte(0).lte(5).describe("The rating between 1 and 5 (inclusive), or 0 to remove the rating.")
}