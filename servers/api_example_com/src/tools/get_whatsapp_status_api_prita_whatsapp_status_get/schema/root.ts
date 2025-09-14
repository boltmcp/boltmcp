import { z } from "zod"

export const inputParamsSchema = {
  "urutan": z.string(),
  "authorization": z.string()
}