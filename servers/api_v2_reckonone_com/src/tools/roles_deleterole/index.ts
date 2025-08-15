import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "roles_deleterole",
  "toolDescription": "Deletes an existing role.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/roles/{roleId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "roleId": "roleId"
    }
  },
  inputParamsSchema
}

export default tool