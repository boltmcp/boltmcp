import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("The name of the user to retrieve. You can only retrieve your own user unless you have admin privileges.")
}