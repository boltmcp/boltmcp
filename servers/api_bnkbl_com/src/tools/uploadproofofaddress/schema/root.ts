import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().uuid().describe("Unique identifier for the client."),
  "product": z.enum(["credit-line","payables","receivables","revolving-credit"]).describe("Product identifier.")
}