import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "join_or_apply_to_business_businesses_business_id_join_post",
  "toolDescription": "Join Or Apply To Business",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/businesses/{business_id}/join",
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
      "biz_invite_id": "biz_invite_id",
      "biz_invite_link_id": "biz_invite_link_id",
      "biz_application": "biz_application",
      "aspect_ids": "aspect_ids",
      "apply_with_email": "apply_with_email"
    }
  },
  inputParamsSchema
}

export default tool