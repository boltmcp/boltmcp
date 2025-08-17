import { z } from "zod"

export const inputParamsSchema = {
  "subarea_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}