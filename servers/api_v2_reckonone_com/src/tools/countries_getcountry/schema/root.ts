import { z } from "zod"

export const inputParamsSchema = {
  "countryId": z.string().describe("The country's id.")
}