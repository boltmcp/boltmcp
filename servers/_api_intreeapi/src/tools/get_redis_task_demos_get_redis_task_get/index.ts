import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_redis_task_demos_get_redis_task_get",
  "toolDescription": "Get Redis Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/get-redis-task",
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