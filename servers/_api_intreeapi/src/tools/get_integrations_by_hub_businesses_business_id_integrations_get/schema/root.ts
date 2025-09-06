import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "integration_type": z.union([z.enum(["planday","google"]).describe("Type of OAuth integration.\n\nNOTE: remember to update migrations if you update this enum."), z.null()]).optional(),
  "integration_id": z.union([z.string(), z.null()]).optional(),
  "id": z.union([z.string().uuid(), z.null()]).optional()
}