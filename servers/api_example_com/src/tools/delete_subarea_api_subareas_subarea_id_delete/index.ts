import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_subarea_api_subareas_subarea_id_delete",
  "toolDescription": "Delete subarea",
  "baseUrl": "https://api.example.com",
  "path": "/api/subareas/{subarea_id}",
  "method": "delete",
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
    "query": {
      "permanent": "permanent"
    }
  },
  inputParamsSchema
}

export default tool