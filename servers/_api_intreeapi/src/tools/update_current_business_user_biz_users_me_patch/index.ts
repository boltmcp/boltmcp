import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_current_business_user_biz_users_me_patch",
  "toolDescription": "Update Current Business User",
  "baseUrl": "/api/intreeapi",
  "path": "/biz/v1.0/biz-users/me",
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
    "body": {
      "name": "name",
      "phone": "phone",
      "settings": "settings",
      "avatar_image_id": "avatar_image_id"
    }
  },
  inputParamsSchema
}

export default tool