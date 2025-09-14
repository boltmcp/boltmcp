import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_login_time_api_account_update_login_time_put",
  "toolDescription": "Update Login Time",
  "baseUrl": "https://api.example.com",
  "path": "/api/account/update-login-time",
  "method": "put",
  "security": [],
  "paramsMap": {
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool