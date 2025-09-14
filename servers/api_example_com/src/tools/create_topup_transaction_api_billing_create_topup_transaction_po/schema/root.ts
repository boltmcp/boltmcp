import { z } from "zod"

export const inputParamsSchema = {
  "amount": z.number(),
  "authorization": z.string()
}