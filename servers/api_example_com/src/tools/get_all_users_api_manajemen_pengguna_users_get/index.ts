import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_users_api_manajemen_pengguna_users_get",
  "toolDescription": "Get All Users",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-pengguna/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool