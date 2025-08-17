import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_area_api_areas_area_id_get",
  "toolDescription": "Get area by ID",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/areas/{area_id}",
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
      "area_id": "area_id"
    }
  },
  inputParamsSchema
}

export default tool