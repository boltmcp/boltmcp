import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_auth_register",
  "toolDescription": "Create a new user account",
  "baseUrl": "https://api.demo-ecommerce.com/v1",
  "path": "/auth/register",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "email": "email",
      "password": "password",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool