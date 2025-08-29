import { z } from "zod"

export const inputParamsSchema = {
  "groupId": z.union([z.string(), z.null()]).optional(),
  "name": z.string().min(1),
  "accept-language": z.union([z.string(), z.null()]).optional()
}