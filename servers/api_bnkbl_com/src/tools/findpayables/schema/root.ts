import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("The number of items to obtain per response. The limit/offset schema is used for pagination. The default value is 10. The maximum allowed value is 100.").optional(),
  "offset": z.string().describe("The number of items to skip in the response. The limit/offset schema is used for pagination. The default value is 0.").optional(),
  "sort_by": z.enum(["created_at","state","amount","currency"]).describe("Use to determine which value to use to sort the paginated result. The default value is created_at.").optional(),
  "descending": z.enum(["true","false"]).describe("Use to determine the sorting order as either descending or ascending. The default value is false, which corresponds to ascending order.").optional(),
  "id[]": z.string().describe("Use to filter the payable list by a collection of payable financing request IDs. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "state[]": z.string().describe("Use to filter the payable request list by a collection of payable financing request states. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "client_id[]": z.string().describe("Use to filter the payable request list by a collection of client IDs. You must use this filter by adding multiple times this query parameter with different values. The format is ISO 4217.").optional(),
  "total_requested_amount_from": z.string().describe("Use to filter the payable request list by amount value greater than the given one. The amount can only include numbers and dot (.), and it must be presented in (EUR) or pence (GBP). For example, 100.00.").optional(),
  "total_requested_amount_to": z.string().describe("Use to filter the payable request list by amount value less than the given one. The amount can only include numbers and dot (.), and it must be presented in (EUR) or pence (GBP). For example, 200.00.").optional(),
  "currency[]": z.string().describe("Use to filter the payable request list by a collection of currencies. You must use this filter by adding multiple times this query parameter with different values. The format is ISO 4217.").optional()
}