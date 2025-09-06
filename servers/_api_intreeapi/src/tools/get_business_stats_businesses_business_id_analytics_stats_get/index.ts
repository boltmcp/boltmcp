import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_business_stats_businesses_business_id_analytics_stats_get",
  "toolDescription": "Get Business Stats",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/analytics/stats",
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
      "embed_member_count": "embed_member_count",
      "embed_team_count": "embed_team_count",
      "embed_partner_count": "embed_partner_count"
    }
  },
  inputParamsSchema
}

export default tool