import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_createsuperfund",
  "toolDescription": "Creates a new super fund.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
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
      "addresses": "addresses",
      "phoneNumbers": "phoneNumbers",
      "electronicAddresses": "electronicAddresses",
      "entityTypes": "entityTypes",
      "bankDetails": "bankDetails",
      "superFundDetails": "superFundDetails"
    }
  },
  inputParamsSchema
}

export default tool