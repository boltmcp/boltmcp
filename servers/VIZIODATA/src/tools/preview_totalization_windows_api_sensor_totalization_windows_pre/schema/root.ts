import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.string(),
  "preview_days": z.number().int().gte(1).lte(30).describe("Dias para preview").optional()
}