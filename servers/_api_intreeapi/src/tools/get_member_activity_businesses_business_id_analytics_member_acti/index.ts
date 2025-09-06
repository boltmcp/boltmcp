import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_member_activity_businesses_business_id_analytics_member_acti",
  "toolDescription": "Get Member Activity",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/analytics/member-activity",
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
      "start": "start",
      "stop": "stop",
      "bins": "bins",
      "tz": "tz",
      "include_biz_made": "include_biz_made",
      "embed_post_activity": "embed_post_activity",
      "embed_comment_activity": "embed_comment_activity"
    }
  },
  inputParamsSchema
}

export default tool