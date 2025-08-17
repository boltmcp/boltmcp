import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_alarm_api_alarms_alarm_id_put",
  "toolDescription": "Update alarm",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/alarms/{alarm_id}",
  "method": "put",
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
      "alarm_id": "alarm_id"
    },
    "body": {
      "active": "active",
      "hidden": "hidden",
      "marked_for_deletion": "marked_for_deletion",
      "status": "status",
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