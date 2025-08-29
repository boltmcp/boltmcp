import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_startup_info_api_app_about_startup_info_get",
  "toolDescription": "Get Startup Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/app/about/startup-info",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool