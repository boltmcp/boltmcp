import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_app_members_by_business_businesses_business_id_users_get",
  "toolDescription": "Get App Members By Business",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/users",
  "method": "get",
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
      "business_id": "business_id"
    },
    "query": {
      "sort_by": "sort_by",
      "embed_group_members": "embed_group_members",
      "embed_redeems": "embed_redeems",
      "embed_shares": "embed_shares",
      "limit": "limit",
      "offset": "offset",
      "group_id": "group_id",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool