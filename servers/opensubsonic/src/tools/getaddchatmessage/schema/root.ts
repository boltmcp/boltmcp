import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().describe("The chat message.")
}