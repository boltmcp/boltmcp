import { z } from "zod"

export const inputParamsSchema = {
  "phone": z.union([z.string().max(255), z.null()]).describe("Phone number linked to token.")
}