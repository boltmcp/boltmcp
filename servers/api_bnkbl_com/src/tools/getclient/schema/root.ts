import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("This is the Credit Client ID provided by Bankable. when the client was created (see the \"Create Client\" response)."),
  "product_id": z.string().describe("Product identifier. The current options are **ETR** and **ETC**.")
}