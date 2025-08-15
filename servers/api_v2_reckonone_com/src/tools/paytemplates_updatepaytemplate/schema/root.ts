import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book id."),
  "paytemplateId": z.string().describe("The paytemplate id to be updated."),
  "name": z.string().nullable().describe("The name of the pay template.").optional(),
  "classifications": z.array(z.object({ "id": z.string().nullable().describe("The pay template classification id.").optional(), "classification": z.string().nullable().describe("Pay template enterprise agreement or award classification.").optional(), "rateType": z.enum(["Salary","Hourly"]).describe("Rate type of pay item.").describe("Rate type.").optional(), "fullTimeAmount": z.number().describe("Fulltime amount.").optional(), "casualAmount": z.number().nullable().describe("Casual amount.").optional(), "casualPercentage": z.number().nullable().describe("Casual percentage.").optional() }).strict().describe("Pay Template Classification Put")).nullable().describe("The classifications for the pay template.").optional()
}