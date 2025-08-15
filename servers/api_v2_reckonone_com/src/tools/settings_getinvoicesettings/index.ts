import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getinvoicesettings",
  "toolDescription": "Gets a book's invoice settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/invoice",
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