import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("Token embedded in the link of the \"forgot-password\" email."),
  "new_password": z.string().max(125)
}