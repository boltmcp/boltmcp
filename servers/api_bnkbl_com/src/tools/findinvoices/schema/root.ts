import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("The number of items to obtain per response. The limit/offset schema is used for pagination. The default value is 10. The maximum allowed value is 100.").optional(),
  "offset": z.string().describe("The number of items to skip in the response. The limit/offset schema is used for pagination. The default value is 0.").optional(),
  "sort_by": z.enum(["created_at","invoice_number","payment_reference","face_value","currency","debtor_registration_number","debtor_country","issuer_registration_number","issuer_country","issuer_name"]).describe("Use to determine which value to use to sort the paginated result. The default value is created_at.").optional(),
  "descending": z.string().describe("Use to determine the sorting order as either descending or ascending. The default value is false, which corresponds to ascending order.").optional(),
  "invoice_number": z.string().describe("Use to filter the invoice list by the invoice number given.").optional(),
  "invoice_number[]": z.string().describe("Use to filter the invoice list by a collection of invoice number. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "payment_reference": z.string().describe("Use to filter the invoice list by the payment reference given.").optional(),
  "payment_reference[]": z.string().describe("Use to filter the invoice list by a collection of payment references. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "face_value_from": z.string().describe("Use to filter the invoice list by face value above than the given one. It must be sent as cents. For example, the value 191.95 has to be sent as 19195.").optional(),
  "face_value_to": z.string().describe("Use to filter the invoice list by face value below than the given one. It must be sent as cents. For example, the value 191.95 has to be sent as 19195.").optional(),
  "currency": z.string().describe("Use to filter the invoice list by the currency code given. The format is ISO 4217.").optional(),
  "currency[]": z.string().describe("Use to filter the invoice list by a collection of currencies. You must use this filter by adding multiple times this query parameter with different values. The format is ISO 4217.").optional(),
  "issuer_name_like": z.string().describe("Use to filter the invoice list by the given issuer name. The like suffix determines that the query we end up doing is a LIKE %VALUE%.").optional(),
  "issuer_country[]": z.string().describe("Use to filter the invoice list by a collection of issuer country codes in ISO 3166 format. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "issuer_registration_number": z.string().describe("Use to filter the invoice list by the issuer registration number given.").optional(),
  "issuer_registration_number[]": z.string().describe("Use to filter the invoice list by a collection of issuer registration numbers. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "debtor_name_like": z.string().describe("Use to filter the invoice list by the given debtor name. The like suffix determines that the query we end up doing is a LIKE %VALUE%.").optional(),
  "debtor_country[]": z.string().describe("Use to filter the invoice list by a collection of debtor countries in ISO 3166 format. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "debtor_registration_number": z.string().describe("Use to filter the invoice list by the debtor registration number given.").optional(),
  "debtor_registration_number[]": z.string().describe("Use to filter the invoice list by a collection of debtor registration numbers. You must use this filter by adding multiple times this query parameter with different values.").optional()
}