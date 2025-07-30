import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversesystemkills",
  "toolDescription": "Get system kills",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/system_kills",
  "method": "get",
  "security": [],
  "paramsMap": {
    "header": {
      "Accept-Language": "Accept-Language",
      "If-None-Match": "If-None-Match",
      "X-Compatibility-Date": "X-Compatibility-Date",
      "X-Tenant": "X-Tenant"
    }
  },
  inputParamsSchema
}

export default tool