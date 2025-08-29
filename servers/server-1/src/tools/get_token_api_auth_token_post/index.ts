import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_token_api_auth_token_post",
  "toolDescription": "Get Token",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/token",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool