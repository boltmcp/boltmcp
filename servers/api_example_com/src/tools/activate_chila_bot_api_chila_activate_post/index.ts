import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_chila_bot_api_chila_activate_post",
  "toolDescription": "Activate Chila Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/activate",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "bot_id": "bot_id",
      "plan": "plan"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool