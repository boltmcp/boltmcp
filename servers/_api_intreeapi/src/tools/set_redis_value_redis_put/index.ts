import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "set_redis_value_redis_put",
  "toolDescription": "Set Redis Value",
  "baseUrl": "/api/intreeapi",
  "path": "/redis",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "key": "key",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool