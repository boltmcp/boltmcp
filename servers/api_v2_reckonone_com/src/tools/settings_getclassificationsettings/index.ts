import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getclassificationsettings",
  "toolDescription": "Get a book's classification settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/classifications",
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