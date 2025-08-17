import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_area_api_areas_post",
  "toolDescription": "Create new area",
  "baseUrl": "https://api.example.com",
  "path": "/api/areas/",
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
      "site_id": "site_id",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool