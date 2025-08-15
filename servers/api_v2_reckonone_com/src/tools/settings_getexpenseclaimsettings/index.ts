import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getexpenseclaimsettings",
  "toolDescription": "Gets a book's expense claim settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/expenseclaims",
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