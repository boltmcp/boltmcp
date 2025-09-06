import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth_callback_oauth_callback_get",
  "toolDescription": "Oauth Callback",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/oauth/callback",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "integration": "integration",
      "code": "code",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool