import { z } from "zod"

export const inputParamsSchema = {
  "DocType": z.string().describe("The DocType you'd like to receive. For example Customer, Supplier, \nEmployee, Account, Lead, Company, Sales Invoice, Purchase Invoice, Stock Entry, etc.\n"),
  "DocumentName": z.string().describe("The name (ID) of the document you'd like to receive. For example EMP001 (of type Employee).\n")
}