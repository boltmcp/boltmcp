import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_unlinkcustomerlinkedcontact",
  "toolDescription": "Unlinks a customer's linked contact.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/contacts/{contactId}/unlink",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId",
      "contactId": "contactId"
    }
  },
  inputParamsSchema
}

export default tool