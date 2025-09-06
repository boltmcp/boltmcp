import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_migration_status_migrations_status_get",
  "toolDescription": "Get Migration Status",
  "baseUrl": "/api/intreeapi",
  "path": "/migrations/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool