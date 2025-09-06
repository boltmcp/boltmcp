import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_invite_link_aspect_invite_link_aspects_post",
  "toolDescription": "Create Invite Link Aspect",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/invite-link-aspects",
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
      "aspect_id": "aspect_id",
      "invite_link_id": "invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool