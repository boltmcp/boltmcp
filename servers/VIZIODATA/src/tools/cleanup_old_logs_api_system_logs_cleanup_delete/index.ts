import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cleanup_old_logs_api_system_logs_cleanup_delete",
  "toolDescription": "Cleanup old logs",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/system-logs/cleanup",
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
      "days": "days",
      "dry_run": "dry_run"
    }
  },
  inputParamsSchema
}

export default tool