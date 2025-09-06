import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("ID token received from auth provider.")
}