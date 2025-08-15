import { z } from "zod"

export const inputParamsSchema = {
  "industryId": z.string().describe("The industry's id.")
}