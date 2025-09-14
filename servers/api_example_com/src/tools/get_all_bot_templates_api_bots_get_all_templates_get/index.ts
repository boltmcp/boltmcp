import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_bot_templates_api_bots_get_all_templates_get",
  "toolDescription": "Get All Bot Templates",
  "baseUrl": "https://api.example.com",
  "path": "/api/bots/get-all-templates",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool