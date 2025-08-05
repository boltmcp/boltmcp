import { z } from "zod"

export const inputParamsSchema = {
  "DraftPaymentId": z.string().describe("The ID of the draft payment.")
}