import { z } from "zod"

export const inputParamsSchema = {
  "site_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}