import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_createsupplierphonenumber",
  "toolDescription": "Adds a new phone number to an existing supplier.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}/phoneNumbers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId"
    },
    "body": {
      "countryCode": "countryCode",
      "areaCode": "areaCode",
      "number": "number",
      "extension": "extension",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool