import { z } from "zod"

export const inputParamsSchema = {
  "phone": z.array(z.string()).describe("Phone numbers to fetch. Example: `?phone={num1}&phone={num2}`. Please note that all phone numbers start with a `+` and the country code. Only phone numbers belonging to users in a relation with or have been invited by the current user will be returned.")
}