import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_work_order_api_work_orders_post",
  "toolDescription": "Criar ordem de serviço",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/",
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
    "body": {
      "active": "active",
      "hidden": "hidden",
      "title": "title",
      "description": "description",
      "type": "type",
      "priority": "priority",
      "company_id": "company_id",
      "site_id": "site_id",
      "area_id": "area_id",
      "machine_id": "machine_id",
      "assigned_to": "assigned_to",
      "assigned_team": "assigned_team",
      "estimated_hours": "estimated_hours",
      "estimated_cost": "estimated_cost",
      "scheduled_start": "scheduled_start",
      "scheduled_end": "scheduled_end",
      "requires_approval": "requires_approval",
      "kanban_position": "kanban_position",
      "kanban_column": "kanban_column",
      "tags": "tags",
      "custom_fields": "custom_fields",
      "created_by": "created_by"
    }
  },
  inputParamsSchema
}

export default tool