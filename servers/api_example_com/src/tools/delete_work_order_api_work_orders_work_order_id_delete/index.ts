import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_work_order_api_work_orders_work_order_id_delete",
  "toolDescription": "Excluir ordem de serviço",
  "baseUrl": "https://api.example.com",
  "path": "/api/work-orders/{work_order_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool