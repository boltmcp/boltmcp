import { z } from "zod"

export const inputParamsSchema = {
  "full_name": z.string().min(1).max(255),
  "phone": z.string().max(255),
  "date_of_birth": z.string().datetime({ offset: true }).describe("Must be at least 16 years old.").optional(),
  "salt": z.union([z.string(), z.null()]).describe("Salt of invite link token is to be used with.").optional(),
  "X-Recaptcha-Token": z.string().describe("reCAPTCHA token. Optional for all envs below QA.").optional()
}