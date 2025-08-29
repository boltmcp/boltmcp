import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth_callback_api_auth_oauth_callback_get",
  "toolDescription": "Oauth Callback",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/oauth/callback",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool