import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_template_bot_api_manajemen_bot_delete_template_bot_bot_id",
  "toolDescription": "Delete Template Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-bot/delete-template-bot/{bot_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "bot_id": "bot_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool