import { z } from "zod"

export const inputParamsSchema = {
  "invite_id": z.union([z.string().uuid(), z.null()]).optional(),
  "invite_link_id": z.union([z.string().uuid(), z.null()]).optional()
}