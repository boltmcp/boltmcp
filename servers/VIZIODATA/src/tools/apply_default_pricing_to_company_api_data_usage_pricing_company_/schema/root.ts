import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "override_existing": z.boolean().describe("Override existing pricing configuration").optional()
}