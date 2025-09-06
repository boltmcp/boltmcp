import { z } from "zod"

export const inputParamsSchema = {
  "invite_link_id": z.union([z.string().uuid(), z.null()]).optional(),
  "user_id": z.union([z.string().uuid(), z.null()]).optional(),
  "phone": z.union([z.string().max(255), z.null()]).describe("If a user does not exist, then a booked user will be created.").optional(),
  "aspect_ids": z.union([z.array(z.string().uuid()), z.null()]).optional()
}