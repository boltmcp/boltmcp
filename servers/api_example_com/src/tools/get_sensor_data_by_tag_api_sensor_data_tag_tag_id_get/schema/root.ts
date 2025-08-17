import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Start time filter").optional(),
  "end_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("End time filter").optional(),
  "limit": z.union([z.number().int().gte(1), z.null()]).describe("Maximum number of records (auto-adjusted for long periods)").optional(),
  "offset": z.number().int().gte(0).optional(),
  "chart_mode": z.boolean().describe("🚀 OTIMIZAÇÃO: Retorna apenas dados essenciais para gráficos (timestamp, value, quality)").optional()
}