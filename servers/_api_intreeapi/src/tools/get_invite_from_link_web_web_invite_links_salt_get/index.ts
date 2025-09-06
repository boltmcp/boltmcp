import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_invite_from_link_web_web_invite_links_salt_get",
  "toolDescription": "Get Invite From Link Web",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/web/invite-links/{salt}",
  "method": "get",
  "security": [
    {
      "key": "X-Simple-Token",
      "value": "<mcp-env-var>X_SIMPLE_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_SIMPLE_TOKEN"
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