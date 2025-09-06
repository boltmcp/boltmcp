import { z } from "zod"

export const inputParamsSchema = {
  "dev_access_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "dev_refresh_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "email": z.string().email().max(255).describe("Required email to login with."),
  "password": z.string().max(125),
  "X-Firebase-AppCheck": z.union([z.string(), z.null()]).describe("TEMPORARILY DISABLED. AppCheck token.").optional(),
  "X-Recaptcha-Token": z.string().describe("reCAPTCHA token. Optional for all envs below QA.").optional()
}