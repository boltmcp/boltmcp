import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kanban_board_api_work_orders_kanban_get",
  "toolDescription": "Quadro Kanban",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/kanban/",
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
    "query": {
      "company_id": "company_id",
      "site_id": "site_id",
      "assigned_to": "assigned_to"
    }
  },
  inputParamsSchema
}

export default tool