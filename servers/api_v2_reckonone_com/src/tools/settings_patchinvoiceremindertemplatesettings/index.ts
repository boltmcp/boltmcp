import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchinvoiceremindertemplatesettings",
  "toolDescription": "Updates selected fields of a book's invoice reminder template settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/invoiceremindertemplates",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "remindersEnabled": "remindersEnabled",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool