import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listallcenters",
  "toolDescription": "List All Centers",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/centers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool