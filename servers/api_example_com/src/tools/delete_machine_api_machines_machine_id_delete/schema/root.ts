import { z } from "zod"

export const inputParamsSchema = {
  "machine_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}