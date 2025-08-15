import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "entities_getentities",
  "toolDescription": "Get a list of entities.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/entities",
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