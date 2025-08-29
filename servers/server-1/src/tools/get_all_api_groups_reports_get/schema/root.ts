import { z } from "zod"

export const inputParamsSchema = {
  "report_type": z.union([z.enum(["backup","restore","migration","bulk_import"]), z.null()]).optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}