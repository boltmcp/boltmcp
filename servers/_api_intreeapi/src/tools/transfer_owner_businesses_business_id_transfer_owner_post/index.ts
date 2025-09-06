import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "transfer_owner_businesses_business_id_transfer_owner_post",
  "toolDescription": "Transfer Owner",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/transfer-owner",
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
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "biz_relation_id": "biz_relation_id",
      "biz_user_email": "biz_user_email",
      "message": "message"
    }
  },
  inputParamsSchema
}

export default tool