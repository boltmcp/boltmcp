import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_updateuserroles",
  "toolDescription": "Updates a user's roles.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/users/{userId}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "userId": "userId"
    },
    "body": {
      "roles": "roles"
    }
  },
  inputParamsSchema
}

export default tool