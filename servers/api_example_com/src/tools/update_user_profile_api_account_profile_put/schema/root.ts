import { z } from "zod"

export const inputParamsSchema = {
  "full_name": z.union([z.string(), z.null()]).optional(),
  "email": z.union([z.string(), z.null()]).optional(),
  "company": z.union([z.string(), z.null()]).optional(),
  "website": z.union([z.string(), z.null()]).optional(),
  "phone_number": z.union([z.string(), z.null()]).optional(),
  "current_credits": z.union([z.number(), z.null()]).optional(),
  "role": z.union([z.string(), z.null()]).optional(),
  "authorization": z.string()
}