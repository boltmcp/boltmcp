import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("This is the ID provided by Bankable when the payable was created (see the \"Submit Payables\" response).")
}