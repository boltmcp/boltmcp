import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "roles_createrole",
  "toolDescription": "Create a new custom role.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/roles",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "name": "name",
      "description": "description",
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool