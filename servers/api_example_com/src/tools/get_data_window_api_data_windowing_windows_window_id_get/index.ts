import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_data_window_api_data_windowing_windows_window_id_get",
  "toolDescription": "Obter janela específica",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-windowing/windows/{window_id}",
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
    "path": {
      "window_id": "window_id"
    }
  },
  inputParamsSchema
}

export default tool