import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.string().describe("Tag ID para invalidar cache"),
  "alarm_type": z.union([z.string(), z.null()]).describe("Tipo de alarme específico").optional(),
  "condition": z.union([z.string(), z.null()]).describe("Condição específica").optional()
}