import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_convertinvoicefrom",
  "toolDescription": "Creates a new invoice from an estimate.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/convertfrom",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "ignoreWarnings": "ignoreWarnings"
    },
    "body": {
      "id": "id",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool