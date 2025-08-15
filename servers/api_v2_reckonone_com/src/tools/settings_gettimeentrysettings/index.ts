import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_gettimeentrysettings",
  "toolDescription": "Get a book's time entry settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/timeEntries",
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