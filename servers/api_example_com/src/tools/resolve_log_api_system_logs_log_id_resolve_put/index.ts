import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resolve_log_api_system_logs_log_id_resolve_put",
  "toolDescription": "Mark log as resolved",
  "baseUrl": "https://api.example.com",
  "path": "/api/system-logs/{log_id}/resolve",
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
      "log_id": "log_id"
    },
    "body": {
      "resolved": "resolved",
      "resolved_by": "resolved_by"
    }
  },
  inputParamsSchema
}

export default tool