import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "authgetloggeduser",
  "toolDescription": "Get the user that is logged in",
  "baseUrl": "https://demo.erpnext.com/api",
  "path": "/method/frappe.auth.get_logged_user",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool