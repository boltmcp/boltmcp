import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_auth_login",
  "toolDescription": "Login and get access token",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/auth/login",
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