import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_site_api_sites_site_id_delete",
  "toolDescription": "Delete site",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/sites/{site_id}",
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
      "site_id": "site_id"
    },
    "query": {
      "permanent": "permanent"
    }
  },
  inputParamsSchema
}

export default tool