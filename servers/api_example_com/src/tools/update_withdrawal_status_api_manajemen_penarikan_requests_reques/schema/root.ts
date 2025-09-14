import { z } from "zod"

export const inputParamsSchema = {
  "request_id": z.string(),
  "status": z.string(),
  "authorization": z.string()
}