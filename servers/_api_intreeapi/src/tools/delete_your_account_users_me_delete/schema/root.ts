import { z } from "zod"

export const inputParamsSchema = {
  "otp": z.union([z.string(), z.null()]).describe("Disabled.").optional()
}