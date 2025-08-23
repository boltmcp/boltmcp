import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("This is the Invoice ID provided by Bankable when the invoice was created (see the \"Create invoice\" response).")
}