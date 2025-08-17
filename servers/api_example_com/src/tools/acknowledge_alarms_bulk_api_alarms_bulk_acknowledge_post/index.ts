import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "acknowledge_alarms_bulk_api_alarms_bulk_acknowledge_post",
  "toolDescription": "Acknowledge multiple alarms",
  "baseUrl": "https://api.example.com",
  "path": "/api/alarms/bulk-acknowledge",
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
      "alarm_ids": "alarm_ids",
      "status": "status",
      "acknowledged_at": "acknowledged_at",
      "acknowledged_by": "acknowledged_by",
      "acknowledged_by_name": "acknowledged_by_name",
      "acknowledged_by_email": "acknowledged_by_email",
      "comment": "comment",
      "acknowledgment_comment": "acknowledgment_comment"
    }
  },
  inputParamsSchema
}

export default tool