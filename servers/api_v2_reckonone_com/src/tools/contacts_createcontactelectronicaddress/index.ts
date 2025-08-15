import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_createcontactelectronicaddress",
  "toolDescription": "Adds a new electronic address to an existing contact.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/electronicAddresses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "contactId": "contactId"
    },
    "body": {
      "type": "type",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool