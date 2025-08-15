import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfundproviders_getsuperfundproviderproducts",
  "toolDescription": "Gets a list of a super fund provider's products.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfundProviders/{superfundProviderId}/products",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "superfundProviderId": "superfundProviderId"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool