import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_invite_invites_post",
  "toolDescription": "Create Invite",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invites",
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
    "body": {
      "invite_link_id": "invite_link_id",
      "user_id": "user_id",
      "phone": "phone",
      "aspect_ids": "aspect_ids"
    }
  },
  inputParamsSchema
}

export default tool