import { z } from "zod"

export const inputParamsSchema = {
  "config_ids": z.union([z.array(z.string()), z.null()]).describe("IDs das configurações específicas (todas se não especificado)").optional(),
  "days_back": z.number().int().gte(1).lte(365).describe("Quantos dias para trás processar").optional(),
  "force_reprocess": z.boolean().describe("Reprocessar mesmo se dados já existem").optional()
}