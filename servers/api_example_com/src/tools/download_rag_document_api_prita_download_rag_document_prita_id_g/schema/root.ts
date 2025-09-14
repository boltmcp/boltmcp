import { z } from "zod"

export const inputParamsSchema = {
  "prita_id": z.string(),
  "authorization": z.string()
}