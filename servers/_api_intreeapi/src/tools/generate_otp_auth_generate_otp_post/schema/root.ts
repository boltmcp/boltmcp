import { z } from "zod"

export const inputParamsSchema = {
  "error_if_user_not_exists": z.boolean().describe("Error if user does not exist.").optional(),
  "error_if_user_exists": z.boolean().describe("Error if user exists.").optional(),
  "vendor_name": z.enum(["web","android","ios"]).describe("Vendor name used to determine the recaptcha project to use.").optional(),
  "phone": z.string().max(255),
  "X-Firebase-AppCheck": z.union([z.string(), z.null()]).describe("TEMPORARILY DISABLED. AppCheck token.").optional(),
  "X-Recaptcha-Token": z.string().describe("reCAPTCHA token. Required for all envs except local and test.").optional()
}