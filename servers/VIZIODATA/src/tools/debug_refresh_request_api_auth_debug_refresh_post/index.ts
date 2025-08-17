import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_refresh_request_api_auth_debug_refresh_post",
  "toolDescription": "Debug refresh token request (Development only)",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/auth/debug/refresh",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool