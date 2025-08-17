import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_token_api_auth_refresh_post",
  "toolDescription": "Refresh access token",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/auth/refresh",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool