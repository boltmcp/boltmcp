import { z } from "zod"

export const inputParamsSchema = {
  "biz_group_id": z.string().uuid(),
  "visibility": z.enum(["public","private","member_public","group_member_public"]).describe("Visibility of a BizGroup.\n\n`public`: visible to everyone\n\n`private`: only access through link or invitation, but cannot be seen\n\n`member_public`: visible to members of the community\n\n`group_member_public`: like private but visible to members already in the group").optional()
}