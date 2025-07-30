import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversetypestypeid",
  "toolDescription": "Get type information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/types/{type_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "type_id": "type_id"
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