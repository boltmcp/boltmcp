import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_work_order_comment_api_work_orders_work_order_id_comments",
  "toolDescription": "Adicionar comentário",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/work-orders/{work_order_id}/comments/",
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
      "active": "active",
      "hidden": "hidden",
      "comment": "comment",
      "is_internal": "is_internal",
      "attachments": "attachments",
      "work_order_id": "b_work_order_id",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool