import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "integrationId": z.string().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}