import { z } from "zod"

export const inputParamsSchema = {
  "template_id": z.string(),
  "b_template_id": z.string().uuid(),
  "company_ids": z.array(z.string().uuid()),
  "override_existing": z.boolean().describe("Se deve sobrescrever configurações existentes").optional(),
  "preserve_monthly_limits": z.boolean().describe("Se deve preservar limites mensais existentes").optional()
}