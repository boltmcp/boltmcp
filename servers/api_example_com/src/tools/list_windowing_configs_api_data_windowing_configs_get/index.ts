import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_windowing_configs_api_data_windowing_configs_get",
  "toolDescription": "Listar configurações de janelamento",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-windowing/configs/",
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
      "company_id": "company_id",
      "enabled_only": "enabled_only",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool