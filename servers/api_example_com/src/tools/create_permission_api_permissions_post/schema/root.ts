import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string().uuid(),
  "permission_type": z.enum(["company","site"]).describe("Tipos de permissão por entidade"),
  "entity_id": z.string().uuid(),
  "permission_level": z.enum(["view","edit","admin"]).describe("Níveis de permissão"),
  "active": z.boolean().optional(),
  "hidden": z.boolean().optional()
}