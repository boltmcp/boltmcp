import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().optional(),
  "client_secret": z.string().optional(),
  "audience": z.string().describe("audience should always be:  'api-mobiz-smart'").optional(),
  "grant_type": z.string().describe("grant_type should always be:  'client_credentials'").optional()
}