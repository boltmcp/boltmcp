import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_usage_status_api_data_usage_debug_status_get",
  "toolDescription": "DEBUG: Status do sistema de data usage",
  "baseUrl": "https://api.example.com",
  "path": "/api/data-usage/debug/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool