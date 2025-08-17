import { z } from "zod"

export const inputParamsSchema = {
  "work_order_id": z.string().uuid(),
  "new_status": z.string(),
  "reason": z.union([z.string(), z.null()]).describe("Motivo da mudança").optional(),
  "kanban_position": z.union([z.number().int(), z.null()]).describe("Nova posição no Kanban").optional()
}