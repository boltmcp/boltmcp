import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "items_patchitem",
  "toolDescription": "Updates selected fields of an existing item.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/items/{itemId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "itemId": "itemId"
    },
    "query": {
      "ExternalResourceId": "ExternalResourceId",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    },
    "body": {
      "name": "name",
      "parentItem": "parentItem",
      "itemType": "itemType",
      "itemCode": "itemCode",
      "status": "status",
      "purchase": "purchase",
      "sale": "sale",
      "amountTaxStatus": "amountTaxStatus"
    }
  },
  inputParamsSchema
}

export default tool