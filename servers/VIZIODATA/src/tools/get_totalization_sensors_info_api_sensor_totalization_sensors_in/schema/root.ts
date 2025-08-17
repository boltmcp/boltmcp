import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.union([z.string(), z.null()]).describe("Filtrar por configuração específica").optional(),
  "include_stats": z.boolean().describe("Incluir estatísticas dos dados").optional(),
  "active_only": z.boolean().describe("Apenas sensores ativos").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limite de registros").optional(),
  "offset": z.number().int().gte(0).describe("Offset para paginação").optional()
}