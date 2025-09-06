import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_redis_demos_redis_get",
  "toolDescription": "Demo Redis",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/redis",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool