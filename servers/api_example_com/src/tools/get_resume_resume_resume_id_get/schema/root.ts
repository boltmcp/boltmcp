import { z } from "zod"

export const inputParamsSchema = {
  "resume_id": z.number().int()
}