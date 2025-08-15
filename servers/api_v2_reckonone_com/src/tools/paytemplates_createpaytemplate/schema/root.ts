import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "name": z.string().nullable().describe("The name of the pay template.").optional(),
  "enterpriseAgreement": z.string().nullable().describe("The enterprise agreement for the pay template.").optional(),
  "award": z.string().nullable().describe("The award for the pay template.").optional(),
  "classifications": z.array(z.object({ "agreementClassification": z.string().nullable().describe("Pay template enterprise agreement classification.").optional(), "awardClassification": z.string().nullable().describe("Pay template award classification.").optional(), "rateType": z.enum(["Salary","Hourly"]).describe("Rate type of pay item.").describe("Rate type.").optional(), "fullTimeAmount": z.number().describe("Fulltime amount.").optional(), "casualAmount": z.number().nullable().describe("Casual amount.").optional(), "casualPercentage": z.number().nullable().describe("Casual percentage.").optional() }).strict().describe("Pay template classification input")).nullable().describe("The classifications for the pay template.").optional()
}