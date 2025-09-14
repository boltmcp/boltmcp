import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("(Since 1.8.0) If specified, return playlists for this user rather than for the authenticated user. The authenticated user must have admin role if this parameter is used.").optional()
}