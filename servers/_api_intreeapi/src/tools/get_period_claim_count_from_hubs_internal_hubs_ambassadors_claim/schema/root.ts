import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.array(z.string().uuid()).describe("Hub ids to fetch claims for. Example: `?hub_id={num1}&hub_id={num2}`"),
  "start": z.string().datetime({ offset: true }),
  "end": z.string().datetime({ offset: true })
}