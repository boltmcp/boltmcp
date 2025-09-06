import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_schedule_schedules_schedule_id_delete",
  "toolDescription": "Delete Schedule",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/schedules/{schedule_id}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "schedule_id": "schedule_id"
    }
  },
  inputParamsSchema
}

export default tool