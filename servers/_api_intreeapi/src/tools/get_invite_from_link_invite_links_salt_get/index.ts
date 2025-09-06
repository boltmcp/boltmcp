import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_from_link_invite_links_salt_get",
  "toolDescription": "Get Invite From Link",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/invite-links/{salt}",
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
      "salt": "salt"
    },
    "query": {
      "error_if_expired": "error_if_expired"
    }
  },
  inputParamsSchema
}

export default tool