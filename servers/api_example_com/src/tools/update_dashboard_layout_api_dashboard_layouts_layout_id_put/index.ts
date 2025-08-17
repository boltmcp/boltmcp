import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_dashboard_layout_api_dashboard_layouts_layout_id_put",
  "toolDescription": "Update dashboard layout",
  "baseUrl": "https://api.example.com",
  "path": "/api/dashboard-layouts/{layout_id}",
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
      "layout_id": "layout_id"
    },
    "body": {
      "name": "name",
      "description": "description",
      "layout_data": "layout_data",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool