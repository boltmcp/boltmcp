import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchsuppliercreditnotesettings",
  "toolDescription": "Updates selected fields of a book's supplier credit note settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/suppliercreditnotes",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "prefix": "prefix",
      "defaultTemplate": "defaultTemplate"
    }
  },
  inputParamsSchema
}

export default tool