import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_data_windows_api_data_windowing_windows_get",
  "toolDescription": "Listar janelas de dados",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-windowing/windows/",
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
      "config_id": "config_id",
      "company_id": "company_id",
      "state": "state",
      "is_baseline": "is_baseline",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool