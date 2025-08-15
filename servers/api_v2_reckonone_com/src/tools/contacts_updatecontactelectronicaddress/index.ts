import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_updatecontactelectronicaddress",
  "toolDescription": "Updates an existing contact electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/electronicAddresses/{type}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "contactId": "contactId",
      "type": "type"
    },
    "body": {
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool