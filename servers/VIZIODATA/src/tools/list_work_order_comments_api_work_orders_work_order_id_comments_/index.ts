import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_work_order_comments_api_work_orders_work_order_id_comments_",
  "toolDescription": "Listar comentários",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/{work_order_id}/comments/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "work_order_id": "work_order_id"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool