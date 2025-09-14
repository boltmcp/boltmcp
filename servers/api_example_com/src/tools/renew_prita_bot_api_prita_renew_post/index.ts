import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "renew_prita_bot_api_prita_renew_post",
  "toolDescription": "Renew Prita Bot",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/renew",
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