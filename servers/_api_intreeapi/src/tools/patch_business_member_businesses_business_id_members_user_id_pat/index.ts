import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_business_member_businesses_business_id_members_user_id_pat",
  "toolDescription": "Patch Business Member",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/businesses/{business_id}/members/{user_id}",
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
      "user_id": "user_id"
    },
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool