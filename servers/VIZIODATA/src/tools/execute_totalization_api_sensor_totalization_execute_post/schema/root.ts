import { z } from "zod"

export const inputParamsSchema = {
  "config_ids": z.union([z.array(z.string().uuid()), z.null()]).describe("IDs específicos para executar (opcional)").optional(),
  "force_execution": z.boolean().describe("Forçar execução mesmo fora do horário").optional(),
  "custom_period_start": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Período customizado - início").optional(),
  "custom_period_end": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Período customizado - fim").optional()
}