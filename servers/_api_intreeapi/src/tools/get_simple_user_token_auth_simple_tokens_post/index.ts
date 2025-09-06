import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_simple_user_token_auth_simple_tokens_post",
  "toolDescription": "Get Simple User Token",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/auth/simple-tokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phone": "phone"
    }
  },
  inputParamsSchema
}

export default tool