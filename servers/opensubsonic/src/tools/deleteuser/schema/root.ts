import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name of the user to delete.")
}