import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dev_login_api_auth_dev_login_post",
  "toolDescription": "Development login (temporary)",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/dev-login",
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