import { z } from "zod"

export const inputParamsSchema = {
  "year": z.number().describe("The year of the date for which you would like to grab a periodic note."),
  "month": z.number().describe("The month (1-12) of the date for which you would like to grab a periodic note."),
  "day": z.number().describe("The day (1-31) of the date for which you would like to grab a periodic note."),
  "period": z.enum(["daily","weekly","monthly","quarterly","yearly"]).describe("The name of the period for which you would like to grab a periodic note.")
}