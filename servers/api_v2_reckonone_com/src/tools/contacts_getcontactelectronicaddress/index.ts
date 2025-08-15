import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_getcontactelectronicaddress",
  "toolDescription": "Gets a contact's electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/electronicAddresses/{type}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "contactId": "contactId",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool