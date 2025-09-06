import { z } from "zod"

export const inputParamsSchema = {
  "phone_numbers": z.array(z.string()).describe("This will delete each user for a number given")
}