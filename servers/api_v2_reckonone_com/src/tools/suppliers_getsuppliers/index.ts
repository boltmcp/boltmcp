import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "suppliers_getsuppliers",
  "toolDescription": "Gets a list of suppliers.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/suppliers",
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