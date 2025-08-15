import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "superfundproviders_getsuperfundprovidershavingusi",
  "toolDescription": "Gets a list of super fund providers having a product with the provided USI.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/superfundProviders/havingUsi/{usi}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId",
      "usi": "usi"
    },
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool