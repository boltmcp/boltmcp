import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "journalId": z.string().describe("The journal's id."),
  "lineItemId": z.string().describe("The id of the line item to update."),
  "reconciliationStatus": z.enum(["Uncleared","Cleared","Reconciled"]).describe("Reconciliation status.").nullable().describe("The reconciliation status.\nNote that this can only be changed between Cleared and Uncleared.").optional(),
  "transactionType": z.enum(["Sale","Purchase"]).describe("The type of transaction (for creating or modifying a journal entry)").nullable().describe("The type of transaction.").optional(),
  "ledgerAccount": z.string().min(1).describe("The id or full name of the ledger account.\nNote that the full name includes the name(s) of any parent ledger account(s) separated by colons."),
  "debit": z.number().nullable().describe("The debit amount.").optional(),
  "credit": z.number().nullable().describe("The credit amount.").optional(),
  "taxRate": z.string().nullable().describe("The id or name of the tax rate.").optional(),
  "taxAmount": z.number().nullable().describe("The tax amount.").optional(),
  "notes": z.string().nullable().describe("Notes.").optional(),
  "entity": z.string().nullable().describe("The entity (customer/supplier/superfund/employee).").optional(),
  "project": z.string().nullable().describe("The id or full name of the project.\nNote that the full name includes the name(s) of any parent project(s) separated by colons.").optional(),
  "classification": z.string().nullable().describe("The id or name of the classification.").optional()
}