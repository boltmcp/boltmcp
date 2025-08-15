import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getpaymentsettings",
  "toolDescription": "Gets a book's payment settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/payments",
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