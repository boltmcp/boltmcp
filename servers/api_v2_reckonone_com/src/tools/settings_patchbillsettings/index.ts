import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchbillsettings",
  "toolDescription": "Updates selected fields of a book's bill settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/bills",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "approvalEnabled": "approvalEnabled",
      "prefix": "prefix",
      "defaultTemplate": "defaultTemplate",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool