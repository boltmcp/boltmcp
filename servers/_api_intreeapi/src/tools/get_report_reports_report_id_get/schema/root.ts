import { z } from "zod"

export const inputParamsSchema = {
  "report_id": z.string().uuid(),
  "embed_object": z.boolean().describe("The object that will be embedded, is dependant of the `object_type` of the report. For now, only `post` is supported for embedding.").optional()
}