import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid().describe("ID of current business making the call."),
  "biz_partnership_invite_link_id": z.string().uuid().describe("ID of the BizPartnershipInviteLink being accepted"),
  "group_ids": z.union([z.array(z.string().uuid()), z.null()]).describe("IDs of the groups that the invited business will have express access to.").optional(),
  "weekly_distributes": z.union([z.number().int().gte(0), z.null()]).describe("Weekly amount of total times other business can distribute treets to your groups. If set to None, there will be no limit.").optional()
}