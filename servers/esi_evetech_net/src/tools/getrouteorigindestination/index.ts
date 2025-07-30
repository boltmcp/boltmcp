import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getrouteorigindestination",
  "toolDescription": "Get route",
  "baseUrl": "https://esi.evetech.net",
  "path": "/route/{origin}/{destination}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "destination": "destination",
      "origin": "origin"
    },
    "query": {
      "avoid": "avoid",
      "connections": "connections",
      "flag": "flag"
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