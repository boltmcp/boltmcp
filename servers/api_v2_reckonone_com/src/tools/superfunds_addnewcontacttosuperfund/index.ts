import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_addnewcontacttosuperfund",
  "toolDescription": "Creates a new contact and links it to the super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds/{superfundId}/contacts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundId": "superfundId"
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