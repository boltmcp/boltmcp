import { z } from "zod"

export const inputParamsSchema = {
  "template_id": z.string().describe("Template ID")
}