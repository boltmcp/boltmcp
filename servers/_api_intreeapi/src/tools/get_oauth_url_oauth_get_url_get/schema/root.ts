import { z } from "zod"

export const inputParamsSchema = {
  "integration": z.enum(["planday","google"]).describe("Type of OAuth integration.\n\nNOTE: remember to update migrations if you update this enum."),
  "redirect_url": z.union([z.string(), z.null()]).describe("Redirect URL from backend to frontend. If not provided, defaults to Intree app.").optional(),
  "community_id": z.union([z.string().uuid(), z.null()]).describe("Specify which community to auto join. It will be returned in the default redirect if not overwritten.").optional()
}