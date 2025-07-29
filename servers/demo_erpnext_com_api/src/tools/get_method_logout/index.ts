import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_method_logout",
  "toolDescription": "Logout from current session",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/method/logout",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool