import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "login_api_auth_login_post",
  "toolDescription": "User login",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/auth/login",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool