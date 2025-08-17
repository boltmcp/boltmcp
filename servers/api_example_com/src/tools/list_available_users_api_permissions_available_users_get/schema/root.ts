import { z } from "zod"

export const inputParamsSchema = {
  "company_id": z.union([z.string(), z.null()]).describe("Filter users without permission in this company").optional()
}