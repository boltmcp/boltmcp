import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.string(),
  "hard_delete": z.boolean().describe("Deletar permanentemente (apenas superuser)").optional()
}