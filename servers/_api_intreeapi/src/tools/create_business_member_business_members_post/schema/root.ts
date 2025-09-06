import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().uuid(),
  "emails": z.array(z.string().email()),
  "role": z.enum(["viewer","moderator","collaborator","admin","billing"])
}