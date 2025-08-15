import { z } from "zod"

export const inputParamsSchema = {
  "industryId": z.string().describe("The industry's id."),
  "categoryId": z.string().describe("The industry category's id."),
  "businessTypeId": z.string().describe("The business type's id.")
}