import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_biz_group_biz_groups_biz_group_id_patch",
  "toolDescription": "Update Biz Group",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-groups/{biz_group_id}",
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
      "biz_group_id": "biz_group_id"
    },
    "body": {
      "base": "base",
      "draft_only": "draft_only"
    }
  },
  inputParamsSchema
}

export default tool