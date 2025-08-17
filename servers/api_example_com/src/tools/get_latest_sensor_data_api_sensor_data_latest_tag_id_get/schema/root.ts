import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "chart_mode": z.boolean().describe("🚀 OTIMIZAÇÃO: Retorna apenas dados essenciais para gráficos").optional()
}