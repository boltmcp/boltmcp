import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disconnect_oauth_connection_oauth_user_external_ids_user_externa",
  "toolDescription": "Disconnect Oauth Connection",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/oauth/user-external-ids/{user_external_id_id}",
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
      "user_external_id_id": "user_external_id_id"
    }
  },
  inputParamsSchema
}

export default tool