import { z } from "zod"

export const inputParamsSchema = {
  "uses": z.number().int(),
  "groupId": z.union([z.string().uuid(), z.null()]).optional(),
  "householdId": z.union([z.string().uuid(), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}