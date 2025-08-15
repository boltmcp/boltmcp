import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_addnewcontacttosupplier",
  "toolDescription": "Creates a new contact and links it to the supplier.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/contacts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId"
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