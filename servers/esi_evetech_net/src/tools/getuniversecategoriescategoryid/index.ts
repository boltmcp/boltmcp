import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuniversecategoriescategoryid",
  "toolDescription": "Get item category information",
  "baseUrl": "https://esi.evetech.net",
  "path": "/universe/categories/{category_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "category_id": "category_id"
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