import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getsuppliercreditnotesettings",
  "toolDescription": "Gets a book's supplier credit note settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/suppliercreditnotes",
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