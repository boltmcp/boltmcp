import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversesystemjumps",
  "toolDescription": "Get system jumps",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/system_jumps",
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