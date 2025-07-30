import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversetypes",
  "toolDescription": "Get types",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/types",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page"
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