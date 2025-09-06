import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_members_by_business_businesses_business_id_biz_relations_get",
  "toolDescription": "Get Members By Business",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/businesses/{business_id}/biz-relations",
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
      "limit": "limit",
      "token": "token",
      "embed_aspects": "embed_aspects",
      "user_id": "user_id",
      "role": "role",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool