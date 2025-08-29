import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string(),
  "canManageHousehold": z.boolean().optional(),
  "canManage": z.boolean().optional(),
  "canInvite": z.boolean().optional(),
  "canOrganize": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}