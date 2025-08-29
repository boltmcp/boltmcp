import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_app_theme_api_app_about_theme_get",
  "toolDescription": "Get App Theme",
  "baseUrl": "https://api.example.com",
  "path": "/api/app/about/theme",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool