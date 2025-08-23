import { z } from "zod"

export const inputParamsSchema = {
  "phone": z.string().min(8).max(20).describe("The ideal format is the E164 format; otherwise the number will be parsed with best attempt while using using the International Dialing Code of the account's business region."),
  "listIds": z.array(z.string().uuid()).optional()
}