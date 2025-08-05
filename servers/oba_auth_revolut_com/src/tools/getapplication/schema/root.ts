import { z } from "zod"

export const inputParamsSchema = {
  "ClientId": z.string().describe("The Client ID of the application.")
}