import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string(),
  "invoiceId": z.string(),
  "toAddresses": z.array(z.string()).nullable().describe("A list of \"To\" addresses.").optional(),
  "ccAddresses": z.array(z.string()).nullable().describe("A list of \"CC\" addresses.").optional(),
  "bccAddresses": z.array(z.string()).nullable().describe("A list of \"BCC\" addresses.").optional(),
  "subject": z.string().min(1).max(200).describe("The email subject."),
  "body": z.string().min(1).describe("The email body."),
  "documentNumber": z.string().nullable().describe("The number of the document that the email relates to.").optional()
}