import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_draft_biz_group_biz_groups_biz_group_id_activate_post",
  "toolDescription": "Activate Draft Biz Group",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-groups/{biz_group_id}/activate",
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
      "biz_group_id": "biz_group_id"
    },
    "body": {
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool