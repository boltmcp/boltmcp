import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_patchcontactelectronicaddress",
  "toolDescription": "Updates selected fields of an existing contact electronic address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/electronicAddresses/{type}",
  "method": "patch",
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