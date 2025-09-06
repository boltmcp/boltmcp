import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_group_ids_by_biz_partnership_businesses_business_id_biz_",
  "toolDescription": "Get Biz Group Ids By Biz Partnership",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/biz-partnerships/{biz_partnership_id}/biz-group-ids",
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
      "biz_partnership_id": "biz_partnership_id",
      "business_id": "business_id"
    }
  },
  inputParamsSchema
}

export default tool