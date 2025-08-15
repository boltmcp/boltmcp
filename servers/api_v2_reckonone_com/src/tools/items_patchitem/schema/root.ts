import { z } from "zod"

export const inputParamsSchema = {
  "bookId": z.string().describe("The book's id."),
  "itemId": z.string().describe("The item's id."),
  "ExternalResourceId": z.string().nullable().describe("The external resource's id.").optional(),
  "ExternalClientId": z.string().describe("The external client application's id.").optional(),
  "ExternalTenancyId": z.string().nullable().describe("The external book/file/tenancy/etc's id.").optional(),
  "name": z.string().nullable().describe("The name of the item.").optional(),
  "parentItem": z.string().nullable().describe("The parent item if there is one.").optional(),
  "itemType": z.enum(["Product","Service"]).describe("The item type.").nullable().describe("The item type.").optional(),
  "itemCode": z.string().nullable().describe("The item code.").optional(),
  "status": z.enum(["Active","Inactive"]).describe("The status of an item.").nullable().describe("The item status.").optional(),
  "purchase": z.object({ "price": z.number().nullable().describe("The item's price.\nIf the item's `amountTaxStatus` is `Inclusive` then the price includes tax (gross).\nIf the item's `amountTaxStatus` is `Exclusive` then the price excludes tax (net).").optional(), "priceAccuracy": z.number().int().nullable().describe("The accuracy (number of decimal places) of the price.").optional(), "ledgerAccount": z.string().nullable().describe("The ledger account.").optional(), "description": z.string().nullable().describe("The description.").optional(), "taxRate": z.string().nullable().describe("The tax rate.").optional() }).strict().describe("Item usage details.").nullable().describe("Details for the item when it is purchased.").optional(),
  "sale": z.object({ "price": z.number().nullable().describe("The item's price.\nIf the item's `amountTaxStatus` is `Inclusive` then the price includes tax (gross).\nIf the item's `amountTaxStatus` is `Exclusive` then the price excludes tax (net).").optional(), "priceAccuracy": z.number().int().nullable().describe("The accuracy (number of decimal places) of the price.").optional(), "ledgerAccount": z.string().nullable().describe("The ledger account.").optional(), "description": z.string().nullable().describe("The description.").optional(), "taxRate": z.string().nullable().describe("The tax rate.").optional() }).strict().describe("Item usage details.").nullable().describe("Details for the item when it is sold.").optional(),
  "amountTaxStatus": z.enum(["Inclusive","Exclusive"]).describe("The tax status of an item's amount.").nullable().describe("The amount tax status of the amounts in the item.\nThis determines whether item prices include or exclude tax (i.e. gross or net).").optional()
}