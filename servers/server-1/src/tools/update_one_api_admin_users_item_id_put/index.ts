import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_one_api_admin_users_item_id_put",
  "toolDescription": "Update One",
  "baseUrl": "https://api.example.com",
  "path": "/api/admin/users/{item_id}",
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
      "canOrganize": "canOrganize",
      "groupId": "groupId",
      "groupSlug": "groupSlug",
      "householdId": "householdId",
      "householdSlug": "householdSlug",
      "tokens": "tokens",
      "cacheKey": "cacheKey"
    },
    "header": {
      "accept-language": "accept-language"
    }
  },
  inputParamsSchema
}

export default tool