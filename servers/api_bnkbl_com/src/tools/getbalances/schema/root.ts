import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.string().uuid().describe("The unique identifier of the investor account.")
}