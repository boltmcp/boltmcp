import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "renew_chila_bot_api_chila_renew_post",
  "toolDescription": "Renew Chila Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/renew",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "urutan": "urutan"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool