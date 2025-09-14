import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activate_prita_bot_api_prita_activate_post",
  "toolDescription": "Activate Prita Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/activate",
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