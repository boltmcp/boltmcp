import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.union([z.string(), z.null()]).describe("ID da configuração específica").optional(),
  "config_ids": z.union([z.array(z.string()), z.null()]).describe("IDs das configurações (múltiplas)").optional(),
  "start_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data de início (ISO format)").optional(),
  "end_date": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Data de fim (ISO format)").optional(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Início do período (alias para start_date)").optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Fim do período (alias para end_date)").optional(),
  "trigger_source": z.union([z.string(), z.null()]).describe("Filtrar por origem do trigger").optional(),
  "min_value": z.union([z.number(), z.null()]).describe("Valor mínimo totalizado").optional(),
  "max_value": z.union([z.number(), z.null()]).describe("Valor máximo totalizado").optional(),
  "per_page": z.number().int().gte(1).lte(10000).describe("Registros por página").optional(),
  "limit": z.union([z.number().int().gte(1).lte(10000), z.null()]).describe("Limite de registros (alias para per_page)").optional(),
  "offset": z.number().int().gte(0).describe("Offset para paginação").optional(),
  "page": z.union([z.number().int().gte(1), z.null()]).describe("Número da página").optional(),
  "chart_mode": z.boolean().describe("Modo chart - retorna dados simplificados").optional()
}