import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "countries_getcountries",
  "toolDescription": "Get a list of countries.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/countries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "perPage": "perPage"
    }
  },
  inputParamsSchema
}

export default tool