import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_alarm_api_alarms_post",
  "toolDescription": "Create new alarm",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/alarms/",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "active": "active",
      "hidden": "hidden",
      "tag_id": "tag_id",
      "alarm_type": "alarm_type",
      "condition_type": "condition_type",
      "current_value": "current_value",
      "limit_value": "limit_value",
      "status": "status",
      "alarm_time": "alarm_time",
      "acknowledged_time": "acknowledged_time",
      "cleared_time": "cleared_time",
      "acknowledged_by": "acknowledged_by",
      "message": "message",
      "priority": "priority"
    }
  },
  inputParamsSchema
}

export default tool