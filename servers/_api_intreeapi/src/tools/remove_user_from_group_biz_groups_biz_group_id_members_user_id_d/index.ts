import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_user_from_group_biz_groups_biz_group_id_members_user_id_d",
  "toolDescription": "Remove User From Group",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-groups/{biz_group_id}/members/{user_id}",
  "method": "delete",
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
      "user_id": "user_id",
      "biz_group_id": "biz_group_id"
    }
  },
  inputParamsSchema
}

export default tool