import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_redis_request_demos_redis_request_get",
  "toolDescription": "Demo Redis Request",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/redis-request",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool