import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().int().describe("The maximum number of episodes to return.").optional()
}