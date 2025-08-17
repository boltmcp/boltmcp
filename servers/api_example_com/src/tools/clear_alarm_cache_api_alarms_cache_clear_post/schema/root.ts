import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.union([z.string(), z.null()]).describe("Tag ID específico para limpar cache. Se omitido, limpa todo o cache").optional()
}