import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_templates_api_chila_templates_bot_chila_get",
  "toolDescription": "Get All Templates",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/templates/bot-chila",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool