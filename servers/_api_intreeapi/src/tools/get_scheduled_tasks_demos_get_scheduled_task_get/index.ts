import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_scheduled_tasks_demos_get_scheduled_task_get",
  "toolDescription": "Get Scheduled Tasks",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/get-scheduled-task",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool