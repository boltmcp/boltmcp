import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assign_work_order_api_work_orders_work_order_id_assign_post",
  "toolDescription": "Atribuir ordem de serviço",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/{work_order_id}/assign/",
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
      "assigned_to": "assigned_to",
      "assigned_team": "assigned_team",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool