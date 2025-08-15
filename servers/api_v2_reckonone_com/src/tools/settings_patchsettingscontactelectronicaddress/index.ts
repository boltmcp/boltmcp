import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_patchsettingscontactelectronicaddress",
  "toolDescription": "Updates selected fields of a contact electronic address in a book's settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/contact/electronicAddresses/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "type": "type"
    },
    "body": {
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool