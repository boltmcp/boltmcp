import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "customers_getcustomers",
  "toolDescription": "Gets a list of customers.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/customers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage",
      "ExternalClientId": "ExternalClientId",
      "ExternalTenancyId": "ExternalTenancyId"
    }
  },
  inputParamsSchema
}

export default tool