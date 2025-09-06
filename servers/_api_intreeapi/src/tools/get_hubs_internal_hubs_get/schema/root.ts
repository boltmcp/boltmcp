import { z } from "zod"

export const inputParamsSchema = {
  "hub_id": z.array(z.string().uuid()).describe("Hub ids to fetch hubs for. Example: `?hub_id={num1}&hub_id={num2}`"),
  "embed_org": z.boolean().optional()
}