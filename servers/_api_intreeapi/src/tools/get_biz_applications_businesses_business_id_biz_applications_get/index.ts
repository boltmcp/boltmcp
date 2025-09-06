import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_applications_businesses_business_id_biz_applications_get",
  "toolDescription": "Get Biz Applications",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/biz-applications",
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
      "embed_user": "embed_user",
      "embed_aspects": "embed_aspects",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool