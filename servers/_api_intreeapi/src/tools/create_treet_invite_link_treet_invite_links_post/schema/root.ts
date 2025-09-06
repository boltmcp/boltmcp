import { z } from "zod"

export const inputParamsSchema = {
  "expires_at": z.string().describe("The expiry date of the link. Default is 7 days from current time.").optional(),
  "treet_id": z.string().uuid()
}