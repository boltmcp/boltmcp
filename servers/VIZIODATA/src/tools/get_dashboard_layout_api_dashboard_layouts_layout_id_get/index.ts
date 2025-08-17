import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_dashboard_layout_api_dashboard_layouts_layout_id_get",
  "toolDescription": "Get dashboard layout by ID",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/dashboard-layouts/{layout_id}",
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
      "layout_id": "layout_id"
    }
  },
  inputParamsSchema
}

export default tool