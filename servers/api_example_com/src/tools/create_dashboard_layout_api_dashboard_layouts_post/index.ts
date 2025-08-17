import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_dashboard_layout_api_dashboard_layouts_post",
  "toolDescription": "Create new dashboard layout",
  "baseUrl": "https://api.example.com",
  "path": "/api/dashboard-layouts/",
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
      "name": "name",
      "description": "description",
      "layout_data": "layout_data",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool