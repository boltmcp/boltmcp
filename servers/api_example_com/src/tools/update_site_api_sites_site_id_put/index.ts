import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_site_api_sites_site_id_put",
  "toolDescription": "Update site",
  "baseUrl": "https://api.example.com",
  "path": "/api/sites/{site_id}",
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
      "site_id": "site_id"
    },
    "body": {
      "name": "name",
      "address": "address",
      "company_id": "company_id",
      "active": "active",
      "hidden": "hidden"
    }
  },
  inputParamsSchema
}

export default tool