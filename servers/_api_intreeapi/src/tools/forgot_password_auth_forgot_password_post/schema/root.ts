import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email(),
  "X-Firebase-AppCheck": z.union([z.string(), z.null()]).describe("TEMPORARILY DISABLED. AppCheck token.").optional(),
  "X-Recaptcha-Token": z.string().describe("reCAPTCHA token. Optional for all envs below QA.").optional()
}