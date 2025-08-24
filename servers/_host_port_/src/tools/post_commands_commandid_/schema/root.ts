import { z } from "zod"

export const inputParamsSchema = {
  "commandId": z.string().describe("The id of the command to execute")
}