import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_redis_check_redis_get",
  "toolDescription": "Check Redis",
  "baseUrl": "/api/intreeapi",
  "path": "/check-redis",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool