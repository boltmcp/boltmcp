import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getsettings",
  "toolDescription": "Get a book's general settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings",
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