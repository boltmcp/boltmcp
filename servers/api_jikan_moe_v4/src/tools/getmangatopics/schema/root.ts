import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "filter": z.enum(["all","episode","other"]).describe("Filter topics").optional()
}