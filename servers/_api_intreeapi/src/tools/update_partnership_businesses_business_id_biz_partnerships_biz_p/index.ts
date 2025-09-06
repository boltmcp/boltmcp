import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_partnership_businesses_business_id_biz_partnerships_biz_p",
  "toolDescription": "Update Partnership",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/biz-partnerships/{biz_partnership_id}",
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
      "business_id": "business_id",
      "biz_partnership_id": "biz_partnership_id"
    },
    "body": {
      "weekly_distributes": "weekly_distributes",
      "contact_id": "contact_id",
      "show_as_partner": "show_as_partner"
    }
  },
  inputParamsSchema
}

export default tool