import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().uuid().describe("This is the credit client ID provided by Bankable. when the client was created (see the \"Create Client\" response).")
}