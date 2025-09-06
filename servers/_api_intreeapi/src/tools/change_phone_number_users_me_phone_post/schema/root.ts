import { z } from "zod"

export const inputParamsSchema = {
  "phone": z.string().max(255),
  "otp": z.string()
}