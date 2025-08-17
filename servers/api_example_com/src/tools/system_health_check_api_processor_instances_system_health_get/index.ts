import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "system_health_check_api_processor_instances_system_health_get",
  "toolDescription": "System Health Check",
  "baseUrl": "https://api.example.com",
  "path": "/api/processor-instances/system/health",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool