import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_ambassador_app_leaderboard_app_hubs_hub_id_leaderboard_get",
  "toolDescription": "Get Ambassador App Leaderboard",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/app/hubs/{hub_id}/leaderboard",
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
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool