import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refresh_token_pydantic_api_auth_refresh_pydantic_post",
  "toolDescription": "Refresh access token (Pydantic validation)",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/auth/refresh-pydantic",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "refresh_token": "refresh_token"
    }
  },
  inputParamsSchema
}

export default tool