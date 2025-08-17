import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_subarea_api_subareas_subarea_id_put",
  "toolDescription": "Update subarea",
  "baseUrl": "https://api.example.com",
  "path": "/api/subareas/{subarea_id}",
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
      "subarea_id": "subarea_id"
    },
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