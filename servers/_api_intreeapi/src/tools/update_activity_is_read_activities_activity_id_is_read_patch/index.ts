import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_activity_is_read_activities_activity_id_is_read_patch",
  "toolDescription": "Update Activity Is Read",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/activities/{activity_id}/is-read",
  "method": "patch",
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
    },
    "body": {
      "is_read": "is_read"
    }
  },
  inputParamsSchema
}

export default tool