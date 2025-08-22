import { z } from "zod"

export const inputParamsSchema = {
  "pdf_url": z.string().url().min(1).max(2083),
  "job_description": z.string().min(10).max(5000)
}