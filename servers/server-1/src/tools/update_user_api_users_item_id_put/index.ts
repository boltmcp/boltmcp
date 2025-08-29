import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_api_users_item_id_put",
  "toolDescription": "Update User",
  "baseUrl": "https://api.example.com",
  "path": "/api/users/{item_id}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "item_id": "item_id"
    },
    "body": {
      "id": "id",
      "username": "username",
      "fullName": "fullName",
      "email": "email",
      "authMethod": "authMethod",
      "admin": "admin",
      "group": "group",
      "household": "household",
      "advanced": "advanced",
      "canInvite": "canInvite",
      "canManage": "canManage",
      "canManageHousehold": "canManageHousehold",
      "canOrganize": "canOrganize"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool