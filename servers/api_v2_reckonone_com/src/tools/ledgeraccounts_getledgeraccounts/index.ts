import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "ledgeraccounts_getledgeraccounts",
  "toolDescription": "Gets a list of ledger accounts.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/ledgeraccounts",
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