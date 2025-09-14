import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A string which uniquely identifies the music folder. Obtained by calls to `getIndexes` or `getMusicDirectory`.")
}