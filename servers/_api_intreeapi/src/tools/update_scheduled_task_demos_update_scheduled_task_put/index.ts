import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_scheduled_task_demos_update_scheduled_task_put",
  "toolDescription": "Update Scheduled Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/update-scheduled-task",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "schedule_id": "schedule_id"
    }
  },
  inputParamsSchema
}

export default tool