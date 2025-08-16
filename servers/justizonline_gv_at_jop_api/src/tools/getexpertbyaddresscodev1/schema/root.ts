import { z } from "zod"

export const inputParamsSchema = {
  "addressCode": z.string().describe("Unique address code of an expert")
}