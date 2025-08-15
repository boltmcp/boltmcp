import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_createcontact",
  "toolDescription": "Creates a new contact.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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
      "electronicAddresses": "electronicAddresses",
      "organisation": "organisation"
    }
  },
  inputParamsSchema
}

export default tool