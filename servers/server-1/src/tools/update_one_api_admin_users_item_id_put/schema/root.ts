import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "id": z.string(),
  "username": z.union([z.string(), z.null()]).optional(),
  "fullName": z.union([z.string(), z.null()]).optional(),
  "email": z.string(),
  "authMethod": z.enum(["Mealie","LDAP","OIDC"]).optional(),
  "admin": z.boolean().optional(),
  "group": z.string(),
  "household": z.string(),
  "advanced": z.boolean().optional(),
  "canInvite": z.boolean().optional(),
  "canManage": z.boolean().optional(),
  "canManageHousehold": z.boolean().optional(),
  "canOrganize": z.boolean().optional(),
  "groupId": z.string(),
  "groupSlug": z.string(),
  "householdId": z.string(),
  "householdSlug": z.string(),
  "tokens": z.union([z.array(z.object({ "name": z.string(), "id": z.number().int(), "createdAt": z.union([z.string().datetime({ offset: true }), z.null()]).optional() })), z.null()]).optional(),
  "cacheKey": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}