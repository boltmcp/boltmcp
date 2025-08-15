import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchsettingscontactphonenumber",
  "toolDescription": "Updates selected fields of a contact phone number in a book's settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/contact/phoneNumbers/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "type": "type"
    },
    "body": {
      "areaCode": "areaCode",
      "number": "number"
    }
  },
  inputParamsSchema
}

export default tool