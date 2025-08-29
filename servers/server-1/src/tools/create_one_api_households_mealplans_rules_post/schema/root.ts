import { z } from "zod"

export const inputParamsSchema = {
  "day": z.enum(["monday","tuesday","wednesday","thursday","friday","saturday","sunday","unset"]).optional(),
  "entryType": z.enum(["breakfast","lunch","dinner","side","unset"]).optional(),
  "queryFilterString": z.string().optional(),
  "accept-language": z.union([z.string(), z.null()]).optional()
}