import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handle_transfer_owner_businesses_business_id_handle_transfer_pos",
  "toolDescription": "Handle Transfer Owner",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/handle-transfer",
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
      "biz_ownership_transfer_id": "biz_ownership_transfer_id",
      "accept": "accept",
      "org_id": "org_id"
    }
  },
  inputParamsSchema
}

export default tool