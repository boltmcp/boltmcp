import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_patchcontactaddress",
  "toolDescription": "Updates selected fields of an existing contact address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/addresses/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "contactId": "contactId",
      "type": "type"
    },
    "body": {
      "line1": "line1",
      "line2": "line2",
      "line3": "line3",
      "suburb": "suburb",
      "town": "town",
      "state": "state",
      "postcode": "postcode",
      "country": "country"
    }
  },
  inputParamsSchema
}

export default tool