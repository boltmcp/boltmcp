import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversesystemssystemid",
  "toolDescription": "Get solar system information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/systems/{system_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "system_id": "system_id"
    },
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