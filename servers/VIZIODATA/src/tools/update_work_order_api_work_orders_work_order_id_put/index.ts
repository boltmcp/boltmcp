import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_work_order_api_work_orders_work_order_id_put",
  "toolDescription": "Atualizar ordem de serviço",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/{work_order_id}",
  "method": "put",
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
      "active": "active",
      "hidden": "hidden",
      "marked_for_deletion": "marked_for_deletion",
      "title": "title",
      "description": "description",
      "type": "type",
      "priority": "priority",
      "site_id": "site_id",
      "area_id": "area_id",
      "machine_id": "machine_id",
      "assigned_to": "assigned_to",
      "assigned_team": "assigned_team",
      "estimated_hours": "estimated_hours",
      "estimated_cost": "estimated_cost",
      "scheduled_start": "scheduled_start",
      "scheduled_end": "scheduled_end",
      "actual_start": "actual_start",
      "actual_end": "actual_end",
      "actual_hours": "actual_hours",
      "actual_cost": "actual_cost",
      "requires_approval": "requires_approval",
      "completion_notes": "completion_notes",
      "kanban_position": "kanban_position",
      "kanban_column": "kanban_column",
      "tags": "tags",
      "custom_fields": "custom_fields"
    }
  },
  inputParamsSchema
}

export default tool