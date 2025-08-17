import { z } from "zod"

export const inputParamsSchema = {
  "area_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}