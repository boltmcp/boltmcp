import { z } from "zod"

export const inputParamsSchema = {
  "city": z.union([z.string(), z.null()]).optional(),
  "country": z.string().min(2).max(2).describe("ISO 3166-1 alpha-2 country code."),
  "line1": z.union([z.string(), z.null()]).describe("E.g. street, PO Box, company name.").optional(),
  "line2": z.union([z.string(), z.null()]).describe("Usually used for floor, apartment, etc. But frontend may use it as a workaround to display VAT on the invoice.").optional(),
  "postal_code": z.union([z.string(), z.null()]).describe("ZIP or postal code").optional(),
  "state": z.union([z.string(), z.null()]).describe("State, county or region.").optional()
}