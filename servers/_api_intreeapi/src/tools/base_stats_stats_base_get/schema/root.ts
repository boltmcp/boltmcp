import { z } from "zod"

export const inputParamsSchema = {
  "date_start": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "date_stop": z.union([z.string().datetime({ offset: true }), z.null()]).optional(),
  "password": z.string()
}