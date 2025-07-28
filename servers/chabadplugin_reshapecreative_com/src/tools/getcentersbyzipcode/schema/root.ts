import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("2- followed by zipcode, ex. 2-32246").optional()
}