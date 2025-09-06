import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "batch_create_partnership_biz_partnerships_batch_post",
  "toolDescription": "Batch Create Partnership",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-partnerships/batch",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "business_id": "business_id",
      "partner_ids": "partner_ids",
      "group_ids": "group_ids",
      "weekly_distributes": "weekly_distributes"
    }
  },
  inputParamsSchema
}

export default tool