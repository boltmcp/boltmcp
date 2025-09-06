import { z } from "zod"

export const inputParamsSchema = {
  "biz_invite_id": z.string().uuid(),
  "group_ids": z.array(z.string().uuid()).min(0).max(1).describe("The ids of the groups to add to the invite.")
}