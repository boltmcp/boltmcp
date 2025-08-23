import { z } from "zod"

export const inputParamsSchema = {
  "debtor_country_code": z.string().describe("The debtor's two-letter country code in ISO 3166 format."),
  "debtor_crn": z.string().describe("The debtor's Company Registration Number."),
  "issuer_country_code": z.string().describe("The issuer's two-letter country code in ISO 3166 format."),
  "issuer_crn": z.string().describe("The issuer's Company Registration Number."),
  "face_value": z.number().describe("The invoice face value can only include numbers and dot (.) must be presented in (EUR) or pence (GBP). For example, 100.00 EUR ."),
  "due_date": z.string().describe("The due date as shown on the potential invoice to be financed. Should be in format YYYY-MM-DD, for example, 2022-01-01.")
}