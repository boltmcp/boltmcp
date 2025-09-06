import { z } from "zod"

export const inputParamsSchema = {
  "report_id": z.string().uuid()
}