import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "approvalEnabled": z.boolean().describe("Indicates whether bill approval process is enabled.").optional(),
  "prefix": z.string().nullable().describe("The bill prefix.").optional(),
  "defaultTemplate": z.string().nullable().describe("The default bill template.").optional(),
  "emailSettings": z.object({ "includeCc": z.boolean().nullable().describe("Indicates whether includes CC by default when emailing.").optional(), "ccAddress": z.string().nullable().describe("Default CC email address.").optional(), "includeBcc": z.boolean().nullable().describe("Indicates whether includes BCC by default when emailing.").optional(), "bccAddress": z.string().nullable().describe("Default BCC email address.").optional(), "emailSubject": z.string().nullable().describe("Default email subject.").optional(), "emailContent": z.string().nullable().describe("Default email content.").optional() }).strict().describe("The email template to patch.").nullable().describe("Email settings.").optional()
}