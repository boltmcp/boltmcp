import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "email": z.string().email().describe("Email address of the a user of the recipient business. They do not have to have an Intree Business account."),
  "message": z.string().describe("This will be embedded in the content of the email.")
}