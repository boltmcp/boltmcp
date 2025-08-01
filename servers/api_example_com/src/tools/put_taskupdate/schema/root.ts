import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "name": z.string().optional(),
  "slug": z.string().optional(),
  "description": z.string().optional(),
  "completed": z.boolean().optional(),
  "due_date": z.string().datetime({ offset: true }).optional()
}