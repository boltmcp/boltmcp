import { z } from "zod"

export const inputParamsSchema = {
  "dev_access_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "dev_refresh_expiry_minutes": z.union([z.number().int(), z.null()]).optional(),
  "email": z.string().email().max(255).describe("Email for BizUser to be registered."),
  "phone": z.union([z.string().max(255), z.null()]).describe("Phone number for BizUser.").optional(),
  "settings": z.union([z.record(z.string()), z.null()]).optional(),
  "password": z.string().max(125),
  "name": z.union([z.string().max(255), z.null()]).describe("Name of BizUser to be registered.").optional(),
  "X-Firebase-AppCheck": z.union([z.string(), z.null()]).describe("TEMPORARILY DISABLED. AppCheck token.").optional(),
  "X-Recaptcha-Token": z.string().describe("reCAPTCHA token. Optional for all envs below QA.").optional()
}