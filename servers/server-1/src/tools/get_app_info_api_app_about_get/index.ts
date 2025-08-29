import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_app_info_api_app_about_get",
  "toolDescription": "Get App Info",
  "baseUrl": "https://api.example.com",
  "path": "/api/app/about",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool