import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "templateId": z.string().describe("The invoice reminder template id."),
  "daysToRemindAfter": z.number().int().describe("The days to reminder").optional(),
  "invoiceEmail": z.object({ "subject": z.string().nullable().describe("The subject of the invoice email.").optional(), "body": z.string().nullable().describe("The body of the invoice email.").optional(), "includeCc": z.boolean().describe("Indicates whether includes CC by default when emailing."), "ccAddress": z.string().max(100).nullable().describe("Default CC email address.").optional(), "includeBcc": z.boolean().describe("Indicates whether includes BCC by default when emailing."), "bccAddress": z.string().max(100).nullable().describe("Default BCC email address.").optional() }).strict().describe("Details of an invoice reminder email.").nullable().describe("The contents of the invoice email").optional()
}