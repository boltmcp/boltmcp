import { z } from "zod"

export const inputParamsSchema = {
  "user_id": z.array(z.string().uuid()).describe("User ids to fetch users for. Example: `?user_id={num1}&user_id={num2}`")
}