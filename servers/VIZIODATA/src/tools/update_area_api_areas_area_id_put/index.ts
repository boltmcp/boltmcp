import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_area_api_areas_area_id_put",
  "toolDescription": "Update area",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/areas/{area_id}",
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
      "area_id": "area_id"
    },
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