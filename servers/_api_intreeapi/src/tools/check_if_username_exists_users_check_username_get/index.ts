import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "check_if_username_exists_users_check_username_get",
  "toolDescription": "Check If Username Exists",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/users/check-username",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool