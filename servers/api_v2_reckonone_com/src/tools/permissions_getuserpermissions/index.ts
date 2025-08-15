import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "permissions_getuserpermissions",
  "toolDescription": "Gets the current user's permissions.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/permissions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool