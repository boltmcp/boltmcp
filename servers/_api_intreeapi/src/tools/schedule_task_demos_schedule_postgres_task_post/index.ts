import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "schedule_task_demos_schedule_postgres_task_post",
  "toolDescription": "Schedule Task",
  "baseUrl": "/api/intreeapi",
  "path": "/demos/schedule-postgres-task",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool