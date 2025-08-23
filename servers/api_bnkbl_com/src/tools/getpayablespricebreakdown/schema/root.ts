import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier for the client provided by Bankable."),
  "financing_amount": z.number().describe("The total amount that a Client desires to finance (1 or more payables)."),
  "repayment_method": z.enum(["weekly_instalments","monthly_instalments"]).describe("Whether a Client wants to repay the financing in weekly or monthly instalments.")
}