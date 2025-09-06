import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_yourself_from_business_businesses_business_id_biz_relatio",
  "toolDescription": "Remove Yourself From Business",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/businesses/{business_id}/biz-relations/me",
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
      "business_id": "business_id"
    },
    "query": {
      "delete_posts": "delete_posts"
    }
  },
  inputParamsSchema
}

export default tool