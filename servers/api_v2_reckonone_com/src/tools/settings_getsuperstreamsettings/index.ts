import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getsuperstreamsettings",
  "toolDescription": "Gets a book's superstream settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/superstream",
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