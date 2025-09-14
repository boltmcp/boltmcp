import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "signup_user_api_auth_signup_post",
  "toolDescription": "Signup User",
  "baseUrl": "https://api.example.com",
  "path": "/api/auth/signup",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "ref": "ref"
    },
    "body": {
      "full_name": "full_name",
      "email": "email",
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool