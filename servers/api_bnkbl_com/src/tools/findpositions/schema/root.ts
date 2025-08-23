import { z } from "zod"

export const inputParamsSchema = {
  "account_id": z.string().uuid().describe("The unique identifier of the investor account."),
  "limit": z.string().describe("Number of items to return per response (pagination). Default is 10, maximum is 100.").optional(),
  "offset": z.string().describe("Number of items to skip in the response (pagination). Default is 0.").optional(),
  "start_date": z.string().date().describe("Start date for the range of trades (must be less than 180 days)."),
  "end_date": z.string().date().describe("End date for the range of trades (must be less than 180 days).")
}