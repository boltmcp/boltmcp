import { z } from "zod"

export const inputParamsSchema = {
  "token_id": z.number().int(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}