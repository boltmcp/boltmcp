import { z } from "zod"

export const inputParamsSchema = {
  "prita_id": z.string(),
  "page": z.number().int().gte(1).describe("Nomor halaman").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Jumlah item per halaman").optional(),
  "authorization": z.string()
}