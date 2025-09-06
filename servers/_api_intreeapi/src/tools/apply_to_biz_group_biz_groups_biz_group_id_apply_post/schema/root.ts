import { z } from "zod"

export const inputParamsSchema = {
  "biz_group_id": z.string().uuid(),
  "biz_invite_id": z.union([z.string().uuid(), z.null()]).describe("Join using an invite, with attached group.").optional(),
  "biz_invite_link_id": z.union([z.string().uuid(), z.null()]).describe("Join using an invite link, with attached group.").optional()
}