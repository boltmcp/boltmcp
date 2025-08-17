import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.string().uuid(),
  "trigger_timestamp": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Timestamp do trigger").optional(),
  "trigger_value": z.union([z.number(), z.string(), z.null()]).describe("Valor do trigger").optional(),
  "notes": z.union([z.string(), z.null()]).describe("Notas da execução").optional()
}