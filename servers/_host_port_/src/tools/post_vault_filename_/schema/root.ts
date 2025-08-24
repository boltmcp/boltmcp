import { z } from "zod"

export const inputParamsSchema = {
  "filename": z.string().describe("Path to the relevant file (relative to your vault root).\n")
}