import { z } from "zod"

export const inputParamsSchema = {
  "config_id": z.string(),
  "apply_operation_recommendation": z.boolean().describe("Aplicar recomendação de operação").optional(),
  "apply_parameter_adjustments": z.boolean().describe("Aplicar ajustes de parâmetros").optional()
}