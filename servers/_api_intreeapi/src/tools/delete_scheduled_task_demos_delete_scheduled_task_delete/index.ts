import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_scheduled_task_demos_delete_scheduled_task_delete",
  "toolDescription": "Delete Scheduled Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/delete-scheduled-task",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "schedule_id": "schedule_id",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool