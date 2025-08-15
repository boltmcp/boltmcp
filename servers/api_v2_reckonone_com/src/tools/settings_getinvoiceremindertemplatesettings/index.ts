import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getinvoiceremindertemplatesettings",
  "toolDescription": "Gets a book's invoice reminder template settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/invoiceremindertemplates",
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