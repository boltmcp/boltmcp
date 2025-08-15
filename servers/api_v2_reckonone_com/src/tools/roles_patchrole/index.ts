import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "roles_patchrole",
  "toolDescription": "Updates selected fields of an existing custom role.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/roles/{roleId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "roleId": "roleId"
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