import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schedule_delayed_email_task_demos_schedule_delayed_email_task_po",
  "toolDescription": "Schedule Delayed Email Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/schedule-delayed-email-task",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "email": "email",
      "delay_in_minutes": "delay_in_minutes"
    }
  },
  inputParamsSchema
}

export default tool