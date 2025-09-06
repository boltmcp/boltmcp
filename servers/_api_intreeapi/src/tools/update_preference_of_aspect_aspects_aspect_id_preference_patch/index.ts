import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_preference_of_aspect_aspects_aspect_id_preference_patch",
  "toolDescription": "Update Preference Of Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspects/{aspect_id}/preference",
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
      "aspect_id": "aspect_id"
    },
    "body": {
      "feed_preference": "feed_preference",
      "notification_preference": "notification_preference",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool