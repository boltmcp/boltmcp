import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.string(),
  "new_tier": z.enum(["base","pro"])
}