import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "oauth_login_api_auth_oauth_get",
  "toolDescription": "Oauth Login",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/oauth",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool