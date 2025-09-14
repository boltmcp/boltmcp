import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_user_api_manajemen_pengguna_users_user_id_delete",
  "toolDescription": "Delete User",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-pengguna/users/{user_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "user_id": "user_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool