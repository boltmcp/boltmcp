import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_configs_summary_api_data_windowing_configs_summary_get",
  "toolDescription": "Resumo das configurações",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-windowing/configs/summary/",
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
      "company_id": "company_id"
    }
  },
  inputParamsSchema
}

export default tool