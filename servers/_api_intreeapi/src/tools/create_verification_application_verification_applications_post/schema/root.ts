import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().min(1).max(750).describe("Message of the verification application."),
  "business_id": z.union([z.string().uuid(), z.null()]).describe("If `business_id` is provided, the application is for a community provider to become verified. Otherwise it is for a business user to become a House Master.").optional()
}