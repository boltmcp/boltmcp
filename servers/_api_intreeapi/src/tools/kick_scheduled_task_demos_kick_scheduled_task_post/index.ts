import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "kick_scheduled_task_demos_kick_scheduled_task_post",
  "toolDescription": "Kick Scheduled Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/kick-scheduled-task",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "schedule_id": "schedule_id"
    }
  },
  inputParamsSchema
}

export default tool