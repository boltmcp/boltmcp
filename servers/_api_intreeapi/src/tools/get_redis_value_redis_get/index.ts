import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_redis_value_redis_get",
  "toolDescription": "Get Redis Value",
  "baseUrl": "/api/intreeapi",
  "path": "/redis",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool