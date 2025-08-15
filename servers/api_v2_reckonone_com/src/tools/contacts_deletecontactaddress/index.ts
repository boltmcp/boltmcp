import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_deletecontactaddress",
  "toolDescription": "Deletes an existing contact address.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}/addresses/{type}",
  "method": "delete",
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