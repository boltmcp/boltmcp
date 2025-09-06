import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "group_ids": z.union([z.array(z.string().uuid()), z.null()]).describe("Ids of groups that the invite link will give express access to.").optional(),
  "weekly_distributes": z.union([z.number().int(), z.null()]).describe("Number of times express access can be used per week. If None, express access has no limit.").optional(),
  "expires_at": z.union([z.string(), z.null()]).describe("Date and time when the invite link will expire.Default is 7 days from now.This is also the maximum expiry date allowed.").optional(),
  "email": z.union([z.string(), z.null()]).describe("Email to send the invite link to. If None, no email will be sent.").optional(),
  "message": z.union([z.string(), z.null()]).describe("Message to send with the email. If None, no message will be sent.").optional()
}