import { z } from "zod"

export const inputParamsSchema = {
  "period": z.enum(["daily","weekly","monthly","quarterly","yearly"]).describe("The name of the period for which you would like to grab a periodic note.")
}