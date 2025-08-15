import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "billId": z.string().describe("The bill's id."),
  "supplier": z.string().nullable().describe("The supplier on the bill").optional(),
  "billDate": z.string().datetime({ offset: true }).nullable().describe("The date of the bill.").optional(),
  "dueDate": z.string().datetime({ offset: true }).nullable().describe("The date bill is due by.").optional(),
  "billDiscountAmount": z.number().describe("The bill discount amount.").optional(),
  "billDiscountPercent": z.number().describe("The bill discount percentage.").optional(),
  "amountTaxStatus": z.string().nullable().describe("The bill tax status.").optional(),
  "status": z.enum(["Unpaid","Draft","Approved","Paid"]).describe("The status of an bill.").nullable().describe("The status of the bill.").optional(),
  "reference": z.string().nullable().describe("The bill reference.").optional(),
  "classification": z.string().nullable().describe("The classification.").optional(),
  "template": z.string().nullable().describe("The template used to print or email the bill.").optional(),
  "notes": z.string().nullable().describe("Notes related to the bill.").optional()
}