import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "reportBasis": z.enum(["Accrual","Cash","Hybrid"]).describe("The sales figures type of tax. Hybrid is for NZ books only.").describe("The tax reporting basis type.").optional(),
  "reportAgeingBasis": z.enum(["TransactionDate","DueDate"]).describe("The ageing report type.").describe("The ageing report type.").optional(),
  "pdfSetup": z.object({ "headerText": z.string().nullable().describe("The header text for pdf setup.").optional(), "printDateTimeStamp": z.boolean().describe("Indicates whether date time stamp is included in print.").optional(), "printPageNumbers": z.boolean().describe("Indicates whether page numbers is included in print.").optional(), "footerText": z.string().nullable().describe("The footer text for pdf setup.").optional() }).strict().describe("A book's report user settings.").nullable().describe("A book's report user settings.").optional()
}