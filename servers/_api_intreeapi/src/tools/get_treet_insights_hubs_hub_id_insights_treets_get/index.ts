import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_insights_hubs_hub_id_insights_treets_get",
  "toolDescription": "Get Treet Insights",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/hubs/{hub_id}/insights/treets",
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
      "hub_id": "hub_id"
    },
    "query": {
      "sort_by": "sort_by",
      "limit": "limit",
      "token": "token",
      "start_date": "start_date",
      "end_date": "end_date",
      "hub_access_state": "hub_access_state",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool