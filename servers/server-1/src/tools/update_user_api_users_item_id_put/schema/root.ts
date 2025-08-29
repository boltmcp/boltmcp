import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "id": z.union([z.string(), z.null()]).optional(),
  "username": z.union([z.string(), z.null()]).optional(),
  "fullName": z.union([z.string(), z.null()]).optional(),
  "email": z.string(),
  "authMethod": z.enum(["Mealie","LDAP","OIDC"]).optional(),
  "admin": z.boolean().optional(),
  "group": z.union([z.string(), z.null()]).optional(),
  "household": z.union([z.string(), z.null()]).optional(),
  "advanced": z.boolean().optional(),
  "canInvite": z.boolean().optional(),
  "canManage": z.boolean().optional(),
  "canManageHousehold": z.boolean().optional(),
  "canOrganize": z.boolean().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}