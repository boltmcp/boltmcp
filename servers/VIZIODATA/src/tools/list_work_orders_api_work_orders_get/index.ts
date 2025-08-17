import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_work_orders_api_work_orders_get",
  "toolDescription": "Listar ordens de serviço",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/",
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
      "page": "page",
      "per_page": "per_page",
      "company_id": "company_id",
      "status": "status",
      "priority": "priority",
      "assigned_to": "assigned_to",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool