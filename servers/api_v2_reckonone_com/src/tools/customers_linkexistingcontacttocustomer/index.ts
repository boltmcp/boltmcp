import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_linkexistingcontacttocustomer",
  "toolDescription": "Links an existing contact to a customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/contacts/{contactId}/link",
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