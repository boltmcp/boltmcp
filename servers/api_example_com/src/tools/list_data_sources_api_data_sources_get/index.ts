import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_data_sources_api_data_sources_get",
  "toolDescription": "List all data sources",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-sources/",
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
    "query": {
      "page": "page",
      "per_page": "per_page",
      "type": "type",
      "search": "search",
      "active_only": "active_only",
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool