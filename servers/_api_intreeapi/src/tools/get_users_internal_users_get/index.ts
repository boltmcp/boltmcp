import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users_internal_users_get",
  "toolDescription": "Get Users",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool