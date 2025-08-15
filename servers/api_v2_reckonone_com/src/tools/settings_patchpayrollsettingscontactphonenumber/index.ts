import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchpayrollsettingscontactphonenumber",
  "toolDescription": "Updates selected fields of a legal contact's phone number in a book's payroll settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/payroll/legalContact/phoneNumbers/{type}",
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