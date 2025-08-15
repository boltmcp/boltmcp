import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "ledgerAccountId": z.string().describe("The ledger account's id."),
  "ExternalResourceId": z.string().nullable().describe("The external resource's id.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional(),
  "name": z.string().nullable().describe("The name of the account.").optional(),
  "description": z.string().nullable().describe("The description of the account.").optional(),
  "parentLedgerAccount": z.string().nullable().describe("The parent ledger account if there is one.").optional(),
  "sortOrder": z.number().int().nullable().describe("The order in which the user would like to sort the account relative to other accounts.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of a ledger account.").nullable().describe("The account status.").optional(),
  "defaultTaxRate": z.string().nullable().describe("The default tax rate for the account.").optional(),
  "accountCode": z.string().nullable().describe("The account code.").optional(),
  "exportCode": z.string().nullable().describe("The export code for the account.").optional(),
  "bankAccount": z.object({ "closedAsOfDate": z.string().datetime({ offset: true }).nullable().describe("When the account was closed.").optional(), "dateOpened": z.string().datetime({ offset: true }).nullable().describe("When the bank account was opened.").optional(), "lockoffDate": z.string().datetime({ offset: true }).nullable().describe("The date when transactions are locked.\nTransactions dated on or before this date cannot be amended.").optional(), "bankBranchNumber": z.string().nullable().describe("The bank branch number (BSB in Australia, Sort Code in UK).").optional(), "bankAccountName": z.string().max(26).nullable().describe("The name of the account holder.").optional(), "bankAccountNumber": z.string().nullable().describe("The bank account number.").optional(), "openingBalance": z.number().nullable().describe("The bank account's opening balance.").optional(), "financialInstitution": z.string().nullable().describe("The id of the financial institution.").optional(), "includeBalancingTransaction": z.boolean().describe("Whether to include a balancing transaction.").optional(), "payerIdentifier": z.string().nullable().describe("The APCA number to identify the payer.").optional() }).strict().describe("Bank account details.").nullable().describe("The bank account details - **only** when the `accountType` is `CurrentAsset_Bank`.").optional(),
  "creditAccount": z.object({ "closedAsOfDate": z.string().datetime({ offset: true }).nullable().describe("When the account was closed.").optional(), "dateOpened": z.string().datetime({ offset: true }).nullable().describe("When the credit account was opened.").optional(), "lockoffDate": z.string().datetime({ offset: true }).nullable().describe("The date when transactions are locked.\nTransactions dated on or before this date cannot be amended.").optional(), "openingBalance": z.number().nullable().describe("The credit account's opening balance.").optional() }).strict().describe("Credit account details.").nullable().describe("The credit account details - **only** when the `accountType` is `CurrentLiability_CreditCard`.").optional()
}