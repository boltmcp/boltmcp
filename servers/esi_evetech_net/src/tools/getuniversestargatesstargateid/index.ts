import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversestargatesstargateid",
  "toolDescription": "Get stargate information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/stargates/{stargate_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "stargate_id": "stargate_id"
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