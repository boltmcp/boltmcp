import { z } from "zod"

export const inputParamsSchema = {
  "pool_address": z.string().regex(new RegExp("^0x[a-fA-F0-9]{40}$")).describe("Pool address with 0x prefix"),
  "apr_days_annualized": z.number().int().gte(1).lte(30).describe("Number of previous days to calculate APR from. 7 would mean the APR is annualized from the past 7 days of activity on the pool.")
}