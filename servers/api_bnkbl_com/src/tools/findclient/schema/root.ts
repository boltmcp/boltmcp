import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("The number of items to obtain per response. The limit/offset schema is used for pagination. The maximum allowed value is 100."),
  "offset": z.number().int().describe("The number of items to skip in the response. The limit/offset schema is used for pagination. The default value is 0."),
  "id": z.string().describe("Use to filter the result using a client ID. Multiple IDs in the query are supported using `key=value` pairs.").optional(),
  "state": z.enum(["NEW_LEAD","LEAD_VERIFIED","LEAD_REJECTED","CONTRACT_SIGNED","COMPANY_CREATED","COMPANY_REQUESTED","CONTRACT_SENT","CONTRACT_GENERATED","LEAD_INVALID_SIGNERS"]).describe("Use to filter the result using client state. Multiple states in the query are supported using `key=value` pairs.").optional(),
  "missing_bank_details": z.boolean().describe("Use to filter the results to show companies that are missing only the bank details to complete the onboarding.").optional(),
  "crn": z.string().describe("Use to filter the result using CRN (country code + registration number). Multiple CRNs in the query are supported using `key=value` pairs.").optional(),
  "product_id": z.enum(["ETR","ETC"]).describe("Use to filter the result using a product ID. Multiple product IDs in the query are supported using `key=value` pairs.").optional()
}