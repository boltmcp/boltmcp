import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_work_order_status_api_work_orders_work_order_id_change_st",
  "toolDescription": "Mudar status da ordem",
  "baseUrl": "https://api.example.com",
  "path": "/api/work-orders/{work_order_id}/change-status/",
  "method": "post",
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
    "body": {
      "new_status": "new_status",
      "reason": "reason",
      "kanban_position": "kanban_position"
    }
  },
  inputParamsSchema
}

export default tool