import { z } from "zod"

export const inputParamsSchema = {
  "DocType": z.string().describe("The DocType you'd like to receive. For example Customer, Supplier, \nEmployee, Account, Lead, Company, Sales Invoice, Purchase Invoice, Stock Entry, etc.\n"),
  "fields": z.array(z.string()).describe("By default, only the \"name\" field is included in the listing, to add more fields, \nyou can pass the fields param to GET request. For example, fields=[\"name\",\"country\"]\n").optional(),
  "filters": z.array(z.array(z.string())).describe("You can filter the listing using sql conditions by passing them as the filters GET param.\nEach condition is an array of the format, [{doctype}, {field}, {operator}, {value}].\nFor example, filters=[[\"Customer\", \"country\", \"=\", \"India\"]]\n").optional(),
  "limit_page_length": z.number().int().describe("By default, all listings are returned paginated. With this parameter you can change the \npage size (how many items are teturned at once).\n").optional(),
  "limit_start": z.number().int().describe("To request successive pages, pass a multiple of your limit_page_length as limit_start. \nFor Example, to request the second page, pass limit_start as 20.\n").optional()
}