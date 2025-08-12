import { z } from "zod"

export const inputParamsSchema = {
  "vdom": z.string().describe("Target VDOM (defaults to 'root')").optional()
}