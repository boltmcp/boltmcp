import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchcreditnotesettings",
  "toolDescription": "Updates selected fields of a book's credit note settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/creditNote",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "prefix": "prefix",
      "defaultTemplate": "defaultTemplate",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool