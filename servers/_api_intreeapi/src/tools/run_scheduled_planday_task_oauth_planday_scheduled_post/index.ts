import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "run_scheduled_planday_task_oauth_planday_scheduled_post",
  "toolDescription": "Run Scheduled Planday Task",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/oauth/planday-scheduled",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool