import { z } from "zod"

export const inputParamsSchema = {
  "mosad-id": z.string().describe("the center's mosad id, it can be found using other api requests.").optional()
}