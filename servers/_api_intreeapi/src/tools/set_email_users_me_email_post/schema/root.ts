import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email().describe("Required email to login with.")
}