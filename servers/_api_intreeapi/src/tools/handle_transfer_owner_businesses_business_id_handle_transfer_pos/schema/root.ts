import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "biz_ownership_transfer_id": z.string().uuid().describe("The id of the BizOwnershipTransfer to accept. This is provided in the email sent to the new owner, and is set to expire after 1 days."),
  "accept": z.boolean().describe("Whether to accept the ownership transfer. If false, the transfer request will be deleted, and nothing will happen."),
  "org_id": z.union([z.string().uuid(), z.null()]).describe("The new org to link the hub to. Must be owned by current user.").optional()
}