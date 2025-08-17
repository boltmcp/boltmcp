import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_logs_summary_api_system_logs_summary_get",
  "toolDescription": "Get logs summary by service",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-logs/summary",
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
      "days": "days"
    }
  },
  inputParamsSchema
}

export default tool