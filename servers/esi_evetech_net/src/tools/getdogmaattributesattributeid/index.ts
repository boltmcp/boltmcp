import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdogmaattributesattributeid",
  "toolDescription": "Get attribute information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/dogma/attributes/{attribute_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "attribute_id": "attribute_id"
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