import { z } from "zod"

export const inputParamsSchema = {
  "scheduledDate": z.string().describe("The date and time when the draft payment is executed.\n\n:::note\nAny draft payment in the CSV file is created as a scheduled payment.\n:::").optional(),
  "title": z.string().describe("The title of draft payment").optional(),
  "x-idempotency-key": z.string().describe("Idempotency key in UUID format.")
}