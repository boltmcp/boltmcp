import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_redis_response_demos_redis_response_get",
  "toolDescription": "Demo Redis Response",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/redis-response",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool