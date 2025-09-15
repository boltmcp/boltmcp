import { z } from "zod"

export const inputParamsSchema = {
  "player": z.string().describe("Player name"),
  "sort": z.enum(["MonthTotal","AllTimeTotal"]).describe("Sort by monthly or all time votes").optional()
}