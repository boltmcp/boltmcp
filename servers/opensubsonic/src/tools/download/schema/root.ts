import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the file to stream. Obtained by calls to getMusicDirectory.")
}