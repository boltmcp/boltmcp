import { z } from "zod"

export const inputParamsSchema = {
  "window_id": z.string().uuid(),
  "baseline_score": z.union([z.number(), z.string(), z.null()]).describe("Score de baseline").optional(),
  "tags": z.union([z.array(z.string()), z.null()]).describe("Tags adicionais").optional(),
  "notes": z.union([z.string(), z.null()]).describe("Notas do baseline").optional()
}