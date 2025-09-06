import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_biz_partnership_ids_by_biz_group_biz_groups_biz_group_id_biz",
  "toolDescription": "Get Biz Partnership Ids By Biz Group",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-groups/{biz_group_id}/biz-partnership-ids",
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
      "biz_group_id": "biz_group_id"
    }
  },
  inputParamsSchema
}

export default tool