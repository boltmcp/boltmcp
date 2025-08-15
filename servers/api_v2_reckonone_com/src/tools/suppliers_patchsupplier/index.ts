import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_patchsupplier",
  "toolDescription": "Updates selected fields of an existing supplier.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers/{supplierId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "supplierId": "supplierId"
    },
    "query": {
      "ExternalResourceId": "ExternalResourceId",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    },
    "body": {
      "name": "name",
      "organisationName": "organisationName",
      "branch": "branch",
      "notes": "notes",
      "businessNumber1": "businessNumber1",
      "businessNumber2": "businessNumber2",
      "businessNumber": "businessNumber",
      "status": "status",
      "entityTypes": "entityTypes",
      "isTpar": "isTpar",
      "bankDetails": "bankDetails"
    }
  },
  inputParamsSchema
}

export default tool