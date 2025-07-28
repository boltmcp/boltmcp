import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcentersbyzipcode",
  "toolDescription": "Get Centers By Zip Code",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/location",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool