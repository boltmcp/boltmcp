import { z } from "zod"

export const inputParamsSchema = {
  "typ_file": z.string(),
  "output_filename": z.union([z.string(), z.null()]).optional()
}