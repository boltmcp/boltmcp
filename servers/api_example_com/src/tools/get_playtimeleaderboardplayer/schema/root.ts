import { z } from "zod"

export const inputParamsSchema = {
  "player": z.string().describe("Player name"),
  "sort": z.enum(["ASC","DESC"]).describe("Sort by ascending or descending").optional()
}