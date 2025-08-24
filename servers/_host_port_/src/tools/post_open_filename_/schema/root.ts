import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.string().describe("Path to the file to return (relative to your vault root).\n"),
  "newLeaf": z.boolean().describe("Open this as a new leaf?").optional()
}