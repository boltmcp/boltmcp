import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversestructures",
  "toolDescription": "List all public structures",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/structures",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "filter": "filter"
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