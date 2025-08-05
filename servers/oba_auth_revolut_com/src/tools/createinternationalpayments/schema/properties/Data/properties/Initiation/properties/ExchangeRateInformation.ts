import { z } from "zod"

export const inputParamsSchema = {
  "UnitCurrency": z.string().regex(new RegExp("^[A-Z]{3,3}$")).describe("The currency that the exchange rate is expressed in.\nFor example, for 1 GBP = xxx EUR, the `UnitCurrency` value is GBP."),
  "ExchangeRate": z.number().describe("The exchange rate used to convert an amount from one currency into another.\nThis reflects the price that one currency was bought at with another currency.\n").optional(),
  "RateType": z.enum(["Actual","Agreed","Indicative"]).describe("The type used to complete the currency exchange."),
  "ContractIdentification": z.string().min(1).max(256).describe("The unique reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.").optional()
}