import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "roles_getrole",
  "toolDescription": "Gets a role.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/roles/{roleId}",
  "method": "get",
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