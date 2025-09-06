import { z } from "zod"

export const inputParamsSchema = {
  "current_hub_id": z.string().uuid(),
  "hub_id": z.array(z.string().uuid()).describe("Hub ids to fetch hubs for. Example: `?hub_id={num1}&hub_id={num2}`")
}