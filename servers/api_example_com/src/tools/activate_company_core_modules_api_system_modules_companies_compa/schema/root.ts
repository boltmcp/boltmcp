import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.string().uuid()
}