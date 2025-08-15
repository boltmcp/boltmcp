import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "approvalEnabled": z.boolean().describe("Indicates whether invoice approval is enabled.").optional(),
  "prefix": z.string().nullable().describe("The invoice prefix.").optional(),
  "defaultTemplate": z.string().nullable().describe("The default invoice template.").optional(),
  "nextInvoiceNumber": z.number().int().describe("The number that will be used for the next invoice.").optional(),
  "defaultPaymentDetails": z.string().nullable().describe("The default payment details.").optional(),
  "serviceDateOnInvoice": z.boolean().describe("Indicates whether service date can be used on invoices.").optional(),
  "emailSettings": z.object({ "includeCc": z.boolean().nullable().describe("Indicates whether includes CC by default when emailing.").optional(), "ccAddress": z.string().nullable().describe("Default CC email address.").optional(), "includeBcc": z.boolean().nullable().describe("Indicates whether includes BCC by default when emailing.").optional(), "bccAddress": z.string().nullable().describe("Default BCC email address.").optional(), "emailSubject": z.string().nullable().describe("Default email subject.").optional(), "emailContent": z.string().nullable().describe("Default email content.").optional() }).strict().describe("The email template to patch.").nullable().describe("Email settings.").optional(),
  "defaultLineItemAccount": z.string().nullable().describe("Default account field for line items.").optional()
}