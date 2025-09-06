import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_business_ids_where_you_are_member_me_business_ids_get",
  "toolDescription": "Get Business Ids Where You Are Member",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/me/business-ids",
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
      "role": "role",
      "partner_id": "partner_id"
    }
  },
  inputParamsSchema
}

export default tool