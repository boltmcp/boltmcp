import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchabadcenterevents",
  "toolDescription": "Get Chabad Center Events",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/events",
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