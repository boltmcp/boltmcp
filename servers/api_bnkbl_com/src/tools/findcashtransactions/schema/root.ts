import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.string().uuid().describe("The unique identifier of the investor account."),
  "start_date": z.string().date().describe("Start date of the range for cash transactions (must be less than 180 days)."),
  "end_date": z.string().date().describe("End date of the range for cash transactions (must be less than 180 days).")
}