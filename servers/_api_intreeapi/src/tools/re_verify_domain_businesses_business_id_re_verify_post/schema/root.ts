import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "email": z.string().email().describe("A verification link will be sent to the email. The email's domain must be allowed by the business.")
}