import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "startDate": z.string().datetime({ offset: true }).nullable().describe("The first day of records for the book.").optional(),
  "lockOffDate": z.string().datetime({ offset: true }).nullable().describe("Transactions on or before this date cannot be changed.").optional(),
  "entity": z.string().nullable().describe("The id or name of the entity type of business.").optional(),
  "industry": z.string().nullable().describe("The id or name of the industry of business.").optional(),
  "category": z.string().nullable().describe("The id or name of the industry's category of business.").optional(),
  "businessType": z.string().nullable().describe("The id or name of the industry category's business type.").optional(),
  "replyToEmailAddress": z.string().nullable().describe("The email address used by clients when replying to emails sent from Reckon One.").optional(),
  "showEmailSentFrom": z.string().nullable().describe("The displayed name of sender in emails.").optional(),
  "bankDataRetrievalDays": z.number().int().nullable().describe("The number of most recent days bank data is retrieved for.").optional(),
  "generalDetails": z.object({ "companyName": z.string().max(255).nullable().describe("The company's business/trading name.").optional(), "legalName": z.string().max(255).nullable().describe("The name of the company that appears on legal documents.").optional(), "taxNumber": z.string().max(50).nullable().describe("The tax number of the company, for example, 'ABN/WPN' for AU and 'GST/IRD number' for NZ.").optional(), "branchNumber": z.string().max(10).nullable().describe("The branch number associated with the tax number.").optional(), "businessNumber": z.string().max(13).nullable().describe("The business number of the company, for example, New Zealand Business Number (NZBN).").optional(), "isRegisteredEmployerOfWHM": z.boolean().describe("Whether the company is a registered WHM employer.").optional() }).strict().describe("Basic business details to patch.").nullable().describe("General company details").optional(),
  "contactDetails": z.object({ "contactName": z.string().max(255).nullable().describe("Name of person who is primary contact within the business.").optional() }).strict().describe("Details on how to contact the business to be patched.").nullable().describe("Business's contact details.").optional()
}