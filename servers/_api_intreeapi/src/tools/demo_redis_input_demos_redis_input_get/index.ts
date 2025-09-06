import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "demo_redis_input_demos_redis_input_get",
  "toolDescription": "Demo Redis Input",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/redis-input",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "some_input": "some_input"
    }
  },
  inputParamsSchema
}

export default tool