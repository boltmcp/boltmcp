import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "daysToRemindAfter": z.number().int().nullable().describe("The days to reminder").optional(),
  "invoiceEmail": z.object({ "subject": z.string().min(1).describe("The subject of the invoice email."), "body": z.string().min(1).describe("The body of the invoice email."), "includeCc": z.boolean().describe("Indicates whether includes CC by default when emailing."), "ccAddress": z.string().max(100).nullable().describe("Default CC email address.").optional(), "includeBcc": z.boolean().describe("Indicates whether includes BCC by default when emailing."), "bccAddress": z.string().max(100).nullable().describe("Default BCC email address.").optional() }).strict().describe("Details of an invoice reminder email.").nullable().describe("The contents of the invoice email").optional()
}