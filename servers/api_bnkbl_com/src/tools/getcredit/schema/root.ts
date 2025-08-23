import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("This is the credit ID provided by Bankable when the credit was created (see the \"Create Credit\" response).")
}