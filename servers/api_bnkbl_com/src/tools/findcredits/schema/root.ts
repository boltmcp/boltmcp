import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.string().describe("The number of items to obtain per response. The limit/offset schema is used for pagination. The default value is 10. The maximum allowed value is 100.").optional(),
  "offset": z.string().describe("The number of items to skip in the response. The limit/offset schema is used for pagination. The default value is 0.").optional(),
  "sort_by": z.enum(["id","created_at","number","state","amount","currency","installments","client_id"]).describe("Use to determine which value to use to sort the paginated result. The default value is created_at.").optional(),
  "descending": z.string().describe("Use to determine the sorting order as either descending or ascending. The default value is false, which corresponds to ascending order.").optional(),
  "id[]": z.string().describe("Use to filter the credits list by a collection of credit IDs. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "number[]": z.string().describe("Use to filter the credits list by a collection of credit number. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "state[]": z.string().describe("Use to filter the credits list by a collection of credit states. You must use this filter by adding multiple times this query parameter with different values.").optional(),
  "amount_from": z.string().describe("Use to filter the credits list by amount value above than the given one. It must be sent as cents. For example, the value 191.95 has to be sent as 19195.").optional(),
  "amount_to": z.string().describe("Use to filter the credits list by amount value below than the given one. It must be sent as cents. For example, the value 191.95 has to be sent as 19195.").optional(),
  "currency[]": z.string().describe("Use to filter the credits list by a collection of currencies. You must use this filter by adding multiple times this query parameter with different values. The format is ISO 4217.").optional(),
  "installments": z.string().describe("Use to filter the credits list by the number of instalments given.").optional(),
  "client_id[]": z.string().describe("Use to filter the credits list by a collection of client IDs. You must use this filter by adding multiple times this query parameter with different values. The format is ISO 4217.").optional()
}