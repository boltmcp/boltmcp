import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_redis_naive_demos_redis_naive_get",
  "toolDescription": "Demo Redis Naive",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/redis-naive",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool