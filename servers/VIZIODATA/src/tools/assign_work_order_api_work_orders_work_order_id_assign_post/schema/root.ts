import { z } from "zod"

export const inputParamsSchema = {
  "work_order_id": z.string().uuid(),
  "assigned_to": z.union([z.string().uuid(), z.null()]).describe("Usuário responsável").optional(),
  "assigned_team": z.union([z.array(z.string().uuid()), z.null()]).describe("Equipe responsável").optional(),
  "notes": z.union([z.string(), z.null()]).describe("Notas da atribuição").optional()
}