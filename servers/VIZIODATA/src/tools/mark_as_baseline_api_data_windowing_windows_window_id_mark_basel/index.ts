import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mark_as_baseline_api_data_windowing_windows_window_id_mark_basel",
  "toolDescription": "Marcar como baseline",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-windowing/windows/{window_id}/mark-baseline/",
  "method": "post",
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
    },
    "body": {
      "baseline_score": "baseline_score",
      "tags": "tags",
      "notes": "notes"
    }
  },
  inputParamsSchema
}

export default tool