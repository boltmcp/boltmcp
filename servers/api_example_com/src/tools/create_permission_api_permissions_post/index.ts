import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_permission_api_permissions_post",
  "toolDescription": "Create new permission",
  "baseUrl": "https://api.example.com",
  "path": "/api/permissions/",
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