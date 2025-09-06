import { z } from "zod"

export const inputParamsSchema = {
  "token": z.string().describe("Custom tier token received in email.")
}