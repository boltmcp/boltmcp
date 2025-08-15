import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoices_getlastinvoiceforcustomer",
  "toolDescription": "Gets the last invoice created for a customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/invoices/lastCreatedForCustomer/{customerId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    }
  },
  inputParamsSchema
}

export default tool