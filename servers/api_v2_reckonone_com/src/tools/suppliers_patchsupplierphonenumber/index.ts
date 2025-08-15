import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_patchsupplierphonenumber",
  "toolDescription": "Updates selected fields of an existing supplier phone number.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/phoneNumbers/{type}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId",
      "type": "type"
    },
    "body": {
      "countryCode": "countryCode",
      "areaCode": "areaCode",
      "number": "number",
      "extension": "extension"
    }
  },
  inputParamsSchema
}

export default tool