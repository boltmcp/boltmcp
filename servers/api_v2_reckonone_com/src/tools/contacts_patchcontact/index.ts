import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "contacts_patchcontact",
  "toolDescription": "Updates selected fields of an existing contact.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/contacts/{contactId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "contactId": "contactId"
    },
    "body": {
      "name": "name",
      "salutation": "salutation",
      "department": "department",
      "position": "position",
      "organisation": "organisation",
      "status": "status",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool