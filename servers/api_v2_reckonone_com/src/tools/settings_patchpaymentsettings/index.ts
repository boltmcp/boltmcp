import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchpaymentsettings",
  "toolDescription": "Updates selected fields of a book's payment settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/payments",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "body": {
      "defaultBankAccount": "defaultBankAccount",
      "emailSettings": "emailSettings"
    }
  },
  inputParamsSchema
}

export default tool