import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfunds_getsuperfunds",
  "toolDescription": "Gets a list of super funds.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfunds",
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