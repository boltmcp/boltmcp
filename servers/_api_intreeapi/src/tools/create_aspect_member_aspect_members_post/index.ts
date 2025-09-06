import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_aspect_member_aspect_members_post",
  "toolDescription": "Create Aspect Member",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/aspect-members",
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
      "member_id": "member_id"
    }
  },
  inputParamsSchema
}

export default tool