import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settings_getpayrollsettings",
  "toolDescription": "Get a book's payroll settings.",
  "baseUrl": "https://api-v2.reckonone.com",
  "path": "/{bookId}/settings/payroll",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "bookId": "bookId"
    }
  },
  inputParamsSchema
}

export default tool