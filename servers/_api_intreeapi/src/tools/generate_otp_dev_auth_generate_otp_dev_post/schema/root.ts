import { z } from "zod"

export const inputParamsSchema = {
  "phone": z.string().max(255),
  "key": z.string().describe("Key to verify the request.")
}