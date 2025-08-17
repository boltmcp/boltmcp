import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string(),
  "permanent": z.boolean().describe("Permanent deletion").optional()
}