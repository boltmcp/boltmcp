import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_subarea_api_subareas_post",
  "toolDescription": "Create new subarea",
  "baseUrl": "https://api.example.com",
  "path": "/api/subareas/",
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
      "area_id": "area_id",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool