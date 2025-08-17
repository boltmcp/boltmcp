import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_company_admin_api_permissions_remove_company_admin_delete",
  "toolDescription": "Remove company administrator",
  "baseUrl": "https://api.example.com",
  "path": "/api/permissions/remove-company-admin",
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
    "query": {
      "user_id": "user_id",
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool