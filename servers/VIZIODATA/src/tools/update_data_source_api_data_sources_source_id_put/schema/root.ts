import { z } from "zod"

export const inputParamsSchema = {
  "source_id": z.string(),
  "name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "company_id": z.union([z.string().uuid(), z.null()]).optional(),
  "config": z.union([z.record(z.any()), z.null()]).optional(),
  "collection_interval": z.union([z.number().int().gte(1).lte(86400), z.null()]).describe("Intervalo de coleta de dados em segundos").optional()
}