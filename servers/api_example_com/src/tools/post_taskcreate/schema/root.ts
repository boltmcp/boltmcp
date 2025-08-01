import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "slug": z.string(),
  "description": z.string(),
  "completed": z.boolean(),
  "due_date": z.string().datetime({ offset: true })
}