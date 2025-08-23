import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_oauth_token",
  "toolDescription": "Get access token",
  "baseUrl": "https://auth.mobiz.co",
  "path": "/oauth/token",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "client_id": "client_id",
      "client_secret": "client_secret",
      "audience": "audience",
      "grant_type": "grant_type"
    }
  },
  inputParamsSchema
}

export default tool