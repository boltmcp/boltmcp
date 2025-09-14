import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_coupons_api_manajemen_kupon_coupons_get",
  "toolDescription": "Get All Coupons",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-kupon/coupons",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "page": "page",
      "limit": "limit"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool