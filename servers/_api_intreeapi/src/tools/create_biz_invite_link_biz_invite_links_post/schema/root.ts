import { z } from "zod"

export const inputParamsSchema = {
  "group_ids": z.array(z.string().uuid()).min(0).max(1).describe("The ids of the groups to add to the invite."),
  "business_id": z.string().uuid(),
  "use_limit": z.union([z.number().int().gt(0).lt(2147483646), z.null()]).optional(),
  "expires_at": z.union([z.string(), z.null()]).describe("If null, then default is 7 days from now. It set then business must be verified.").optional(),
  "tag": z.union([z.string(), z.null()]).describe("Tag is used to attach meta data to the user after accepting the invite link.").optional()
}