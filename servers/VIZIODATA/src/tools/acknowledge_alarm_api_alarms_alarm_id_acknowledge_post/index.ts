import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acknowledge_alarm_api_alarms_alarm_id_acknowledge_post",
  "toolDescription": "Acknowledge alarm",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/alarms/{alarm_id}/acknowledge",
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
    "path": {
      "alarm_id": "alarm_id"
    },
    "body": {
      "id": "id",
      "status": "status",
      "acknowledged_by": "acknowledged_by",
      "acknowledged_by_name": "acknowledged_by_name",
      "acknowledged_by_email": "acknowledged_by_email",
      "acknowledged_at": "acknowledged_at",
      "acknowledgment_comment": "acknowledgment_comment",
      "comment": "comment"
    }
  },
  inputParamsSchema
}

export default tool