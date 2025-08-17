import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "unmark_baseline_api_data_windowing_windows_window_id_mark_baseli",
  "toolDescription": "Remover marcação de baseline",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-windowing/windows/{window_id}/mark-baseline/",
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
    "path": {
      "window_id": "window_id"
    }
  },
  inputParamsSchema
}

export default tool