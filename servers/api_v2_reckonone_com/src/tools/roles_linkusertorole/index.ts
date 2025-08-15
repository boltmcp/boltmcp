import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "roles_linkusertorole",
  "toolDescription": "Links a user to a role.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/roles/{roleId}/users/{userId}/link",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "roleId": "roleId",
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool