import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdogmaattributes",
  "toolDescription": "Get attributes",
  "baseUrl": "https://esi.evetech.net",
  "path": "/dogma/attributes",
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