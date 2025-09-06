import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_express_access_businesses_business_id_biz_partnerships_bi",
  "toolDescription": "Update Express Access",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/biz-partnerships/{biz_partnership_id}/express-access",
  "method": "patch",
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
      "biz_partnership_id": "biz_partnership_id",
      "business_id": "business_id"
    },
    "body": {
      "biz_groups": "biz_groups"
    }
  },
  inputParamsSchema
}

export default tool