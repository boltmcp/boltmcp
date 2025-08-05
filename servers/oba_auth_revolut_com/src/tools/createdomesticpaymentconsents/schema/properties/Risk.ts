import { z } from "zod"

export const inputParamsSchema = {
  "PaymentContextCode": z.enum(["BillPayment","EcommerceGoods","EcommerceServices","Other","PartyToParty"]).describe("The payment context.").optional(),
  "MerchantCategoryCode": z.string().describe("The merchant category code.").optional(),
  "MerchantCustomerIdentification": z.string().describe("The merchant customer identification.").optional(),
  "DeliveryAddress": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `DeliveryAddress` to the tool, first call the tool `expandSchema` with \"/properties/Risk/properties/DeliveryAddress\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The information that locates and identifies the delivery address, as defined by postal services or in free format text.</property-description>").optional()
}