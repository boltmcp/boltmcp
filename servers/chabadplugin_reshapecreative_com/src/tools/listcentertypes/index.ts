import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listcentertypes",
  "toolDescription": "List Center Types",
  "baseUrl": "https://chabadplugin.reshapecreative.com",
  "path": "/center-types",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool