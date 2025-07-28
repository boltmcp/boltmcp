import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcenterinfo",
  "toolDescription": "Get Center Info",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/center",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "mosad-id": "mosad-id"
    }
  },
  inputParamsSchema
}

export default tool