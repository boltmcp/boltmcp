import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchreceiptsettings",
  "toolDescription": "Updates selected fields of a book's receipt settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/receipt",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "prefix": "prefix",
      "defaultBankAccount": "defaultBankAccount",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool