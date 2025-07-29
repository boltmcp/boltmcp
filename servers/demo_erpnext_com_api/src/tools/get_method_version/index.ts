import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_method_version",
  "toolDescription": "Get the version of the app",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/method/version",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool