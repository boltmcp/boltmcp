import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdogmaeffectseffectid",
  "toolDescription": "Get effect information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/dogma/effects/{effect_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "effect_id": "effect_id"
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