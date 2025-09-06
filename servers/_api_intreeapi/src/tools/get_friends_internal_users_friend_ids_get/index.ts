import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_friends_internal_users_friend_ids_get",
  "toolDescription": "Get Friends",
  "baseUrl": "/api/intreeapi",
  "path": "/internal/users/friend-ids",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "current_user_id": "current_user_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool