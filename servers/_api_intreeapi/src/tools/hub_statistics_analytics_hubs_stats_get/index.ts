import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "hub_statistics_analytics_hubs_stats_get",
  "toolDescription": "Hub Statistics",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/analytics/hubs/stats",
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
    "query": {
      "hub_id": "hub_id",
      "embed_total_treets": "embed_total_treets",
      "redeem_limit_hit": "redeem_limit_hit",
      "start_date": "start_date",
      "end_date": "end_date",
      "embed_claim_count": "embed_claim_count"
    }
  },
  inputParamsSchema
}

export default tool