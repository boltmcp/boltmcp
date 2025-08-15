import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getinvoicesummary",
  "toolDescription": "Gets a summary of a book's invoices.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/summary",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "baseDate": "baseDate"
    }
  },
  inputParamsSchema
}

export default tool