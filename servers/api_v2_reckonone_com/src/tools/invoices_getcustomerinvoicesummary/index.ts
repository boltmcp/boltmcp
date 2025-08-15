import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getcustomerinvoicesummary",
  "toolDescription": "Gets a summary of a book's invoices for a given customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/summary/{customerId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "query": {
      "baseDate": "baseDate"
    }
  },
  inputParamsSchema
}

export default tool