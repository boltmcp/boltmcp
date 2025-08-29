import { z } from "zod"

export const inputParamsSchema = {
  "item_id": z.string(),
  "actionType": z.enum(["link","post"]),
  "title": z.string(),
  "url": z.string(),
  "groupId": z.string(),
  "householdId": z.string(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}