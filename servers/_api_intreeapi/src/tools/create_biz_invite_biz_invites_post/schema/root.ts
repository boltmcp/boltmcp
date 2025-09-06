import { z } from "zod"

export const inputParamsSchema = {
  "group_ids": z.array(z.string().uuid()).min(0).max(1).describe("The ids of the groups to add to the invite."),
  "business_id": z.string().uuid(),
  "phone": z.union([z.string(), z.null()]).optional(),
  "user_id": z.union([z.string().uuid(), z.null()]).optional()
}