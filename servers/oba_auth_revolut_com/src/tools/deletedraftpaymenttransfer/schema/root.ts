import { z } from "zod"

export const inputParamsSchema = {
  "DraftPaymentId": z.string().describe("The id of the draft payment"),
  "DraftPaymentTransferId": z.string().describe("The id of the draft payment transfer")
}