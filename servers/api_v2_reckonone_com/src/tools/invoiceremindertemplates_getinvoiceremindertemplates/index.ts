import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoiceremindertemplates_getinvoiceremindertemplates",
  "toolDescription": "Gets a list of invoice reminder templates.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoiceremindertemplates",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool