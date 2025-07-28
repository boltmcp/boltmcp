import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchcenters",
  "toolDescription": "Search Centers",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/search",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "quantity": "quantity",
      "query": "query",
      "type": "type",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool