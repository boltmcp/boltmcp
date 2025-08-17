import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "debug_force_flush_api_data_usage_debug_flush_post",
  "toolDescription": "DEBUG: Forçar flush de dados pendentes",
  "baseUrl": "https://viziodata-backend.up.railway.app/api/",
  "path": "/api/data-usage/debug/flush",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool