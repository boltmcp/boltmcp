import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "ids_to_remove": z.union([z.array(z.string().uuid()), z.null()]).optional(),
  "new_domains": z.union([z.array(z.object({ "name": z.string().regex(new RegExp("^[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}$")), "verification_interval_minutes": z.union([z.number().int().gte(5), z.null()]).describe("Note that the min value for PROD is 1440.") }).describe("DTO for input.")).max(10), z.null()]).optional()
}