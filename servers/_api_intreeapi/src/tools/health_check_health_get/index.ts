import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "health_check_health_get",
  "toolDescription": "Health Check",
  "baseUrl": "/api/intreeapi",
  "path": "/health",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool