import { z } from "zod"

export const inputParamsSchema = {
  "permission_id": z.string(),
  "user_id": z.union([z.string().uuid(), z.null()]).optional(),
  "permission_type": z.union([z.enum(["company","site"]).describe("Tipos de permissão por entidade"), z.null()]).optional(),
  "entity_id": z.union([z.string().uuid(), z.null()]).optional(),
  "permission_level": z.union([z.enum(["view","edit","admin"]).describe("Níveis de permissão"), z.null()]).optional(),
  "active": z.union([z.boolean(), z.null()]).optional(),
  "hidden": z.union([z.boolean(), z.null()]).optional()
}