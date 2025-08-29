import { z } from "zod"

export const inputParamsSchema = {
  "username_or_id": z.union([z.string(), z.string()]),
  "accept-language": z.union([z.string(), z.null()]).optional()
}