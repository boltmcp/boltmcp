import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_permission_api_permissions_permission_id_get",
  "toolDescription": "Get permission by ID",
  "baseUrl": "https://api.example.com",
  "path": "/api/permissions/{permission_id}",
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
      "permission_id": "permission_id"
    }
  },
  inputParamsSchema
}

export default tool