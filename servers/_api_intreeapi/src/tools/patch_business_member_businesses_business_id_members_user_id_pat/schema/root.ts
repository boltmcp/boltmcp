import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "user_id": z.string().uuid(),
  "role": z.union([z.enum(["viewer","moderator","collaborator","admin","billing"]), z.null()]).optional()
}