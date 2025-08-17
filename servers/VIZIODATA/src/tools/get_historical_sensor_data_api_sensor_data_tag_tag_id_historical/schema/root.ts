import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start time for data aggregation (defaults to 24 hours ago)").optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End time for data aggregation (defaults to now)").optional(),
  "aggregation": z.union([z.enum(["raw","1min","5min","10min","15min","30min","hourly","half_daily","daily","bi_weekly"]).describe("Intervalos de agregação unificados\n\nCombina tipos de agregação e intervalos de agrupamento em um único enum\npara simplicidade e consistência da API."), z.null()]).describe("Aggregation interval (replaces both aggregation and group_by)").optional(),
  "limit": z.number().int().gte(1).lte(10000).describe("Maximum number of aggregated points").optional(),
  "chart_mode": z.boolean().describe("🚀 OTIMIZAÇÃO: Retorna apenas dados essenciais para gráficos").optional(),
  "require_totalization": z.boolean().describe("🔐 VALIDAÇÃO: Requer módulo de totalização (para funcionalidades avançadas)").optional()
}