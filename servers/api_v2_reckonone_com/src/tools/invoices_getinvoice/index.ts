import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getinvoice",
  "toolDescription": "Gets an invoice.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/{invoiceId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "invoiceId": "invoiceId"
    },
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool