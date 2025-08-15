import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_addnewcontacttocustomer",
  "toolDescription": "Creates a new contact and links it to the customer.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers/{customerId}/contacts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "customerId": "customerId"
    },
    "body": {
      "name": "name",
      "salutation": "salutation",
      "department": "department",
      "position": "position",
      "status": "status",
      "notes": "notes",
      "addresses": "addresses",
      "phoneNumbers": "phoneNumbers",
      "electronicAddresses": "electronicAddresses"
    }
  },
  inputParamsSchema
}

export default tool