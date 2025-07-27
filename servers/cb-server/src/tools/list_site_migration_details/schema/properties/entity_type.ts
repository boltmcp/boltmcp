import { z } from "zod"

export const inputParamsSchema = {
  "is": z.enum(["customer","subscription","invoice","credit_note","transaction","order"]).describe("\\* \\`customer\\` - Entity that represents a customer \\* \\`subscription\\` - Entity that represents a subscription of a customer \\* \\`invoice\\` - Invoice description \\* \\`credit_note\\` - Credit note description \\* \\`transaction\\` - Entity that represents a transaction. \\* \\`order\\` - Entity that represents an order\n").optional(),
  "is_not": z.enum(["customer","subscription","invoice","credit_note","transaction","order"]).describe("\\* \\`customer\\` - Entity that represents a customer \\* \\`subscription\\` - Entity that represents a subscription of a customer \\* \\`invoice\\` - Invoice description \\* \\`credit_note\\` - Credit note description \\* \\`transaction\\` - Entity that represents a transaction. \\* \\`order\\` - Entity that represents an order\n").optional(),
  "in": z.string().regex(new RegExp("^\\[(customer|subscription|invoice|credit_note|transaction|order)(,(customer|subscription|invoice|credit_note|transaction|order))*\\]$")).optional(),
  "not_in": z.string().regex(new RegExp("^\\[(customer|subscription|invoice|credit_note|transaction|order)(,(customer|subscription|invoice|credit_note|transaction|order))*\\]$")).optional()
}