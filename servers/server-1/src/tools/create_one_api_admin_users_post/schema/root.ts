import { z } from "zod"

export const inputParamsSchema = {
  "id": z.union([z.string(), z.null()]).optional(),
  "username": z.string(),
  "fullName": z.string(),
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
  "password": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}