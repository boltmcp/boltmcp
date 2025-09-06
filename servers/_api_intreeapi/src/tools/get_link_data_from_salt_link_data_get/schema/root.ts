import { z } from "zod"

export const inputParamsSchema = {
  "salt": z.string().describe("Salt of the invite link.")
}