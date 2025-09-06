import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kick_redis_task_demos_kick_redis_task_post",
  "toolDescription": "Kick Redis Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/kick-redis-task",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "key": "key",
      "val": "val"
    }
  },
  inputParamsSchema
}

export default tool