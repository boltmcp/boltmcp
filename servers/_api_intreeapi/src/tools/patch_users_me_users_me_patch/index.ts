import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_users_me_users_me_patch",
  "toolDescription": "Patch Users Me",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/me",
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
      "full_name": "full_name",
      "username": "username",
      "is_public": "is_public",
      "avatar_image_id": "avatar_image_id",
      "cover_image_id": "cover_image_id"
    }
  },
  inputParamsSchema
}

export default tool