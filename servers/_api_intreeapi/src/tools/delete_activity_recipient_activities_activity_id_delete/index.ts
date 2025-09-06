import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_activity_recipient_activities_activity_id_delete",
  "toolDescription": "Delete Activity Recipient",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/activities/{activity_id}",
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
      "activity_id": "activity_id"
    }
  },
  inputParamsSchema
}

export default tool