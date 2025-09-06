import { z } from "zod"

export const inputParamsSchema = {
  "partner_id": z.string().uuid(),
  "hub_id": z.string().uuid(),
  "treet": z.union([z.object({ "id": z.string().uuid(), "title": z.string() }).describe("DTO for treet title and id."), z.null()]).optional(),
  "cover_image_url": z.union([z.string(), z.null()]).optional()
}