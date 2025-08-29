import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_one_api_admin_users_post",
  "toolDescription": "Create One",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/users",
  "method": "post",
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
      "canOrganize": "canOrganize",
      "password": "password"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool