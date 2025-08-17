import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_permission_api_permissions_permission_id_delete",
  "toolDescription": "Delete permission",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/permissions/{permission_id}",
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
      "permission_id": "permission_id"
    }
  },
  inputParamsSchema
}

export default tool