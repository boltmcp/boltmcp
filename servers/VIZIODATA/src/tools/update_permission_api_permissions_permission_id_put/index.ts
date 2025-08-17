import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_permission_api_permissions_permission_id_put",
  "toolDescription": "Update permission",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/permissions/{permission_id}",
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
      "permission_id": "permission_id"
    },
    "body": {
      "user_id": "user_id",
      "permission_type": "permission_type",
      "entity_id": "entity_id",
      "permission_level": "permission_level",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool