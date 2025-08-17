import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}