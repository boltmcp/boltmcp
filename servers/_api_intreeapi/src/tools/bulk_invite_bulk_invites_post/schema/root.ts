import { z } from "zod"

export const inputParamsSchema = {
  "external_client_id": z.union([z.string().uuid(), z.null()]).describe("This ID can be used to track the result of the task.").optional(),
  "business_id": z.string().uuid(),
  "pack_id": z.union([z.string().uuid(), z.null()]).describe("Optional pack to invite to.").optional(),
  "emails": z.array(z.string().email()).min(1).max(1000)
}