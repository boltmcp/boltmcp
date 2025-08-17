import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_system_logs_api_system_logs_get",
  "toolDescription": "List system logs",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-logs/",
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
      "service": "service",
      "level": "level",
      "start_date": "start_date",
      "end_date": "end_date",
      "resolved": "resolved",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool