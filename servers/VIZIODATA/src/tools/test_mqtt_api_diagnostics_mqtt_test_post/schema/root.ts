import { z } from "zod"

export const inputParamsSchema = {
  "broker_host": z.union([z.string(), z.null()]).optional(),
  "broker_port": z.union([z.number().int(), z.null()]).optional(),
  "username": z.union([z.string(), z.null()]).optional(),
  "password": z.union([z.string(), z.null()]).optional(),
  "test_topic": z.union([z.string(), z.null()]).optional(),
  "timeout_seconds": z.union([z.number().int(), z.null()]).optional()
}