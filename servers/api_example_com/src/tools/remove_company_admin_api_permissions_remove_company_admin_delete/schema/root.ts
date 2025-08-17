import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.string(),
  "company_id": z.string()
}