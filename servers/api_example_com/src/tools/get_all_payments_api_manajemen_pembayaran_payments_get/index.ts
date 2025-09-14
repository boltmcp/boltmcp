import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_payments_api_manajemen_pembayaran_payments_get",
  "toolDescription": "Get All Payments",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-pembayaran/payments",
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