import { z } from "zod"

export const inputParamsSchema = {
  "player": z.string().describe("Player name")
}