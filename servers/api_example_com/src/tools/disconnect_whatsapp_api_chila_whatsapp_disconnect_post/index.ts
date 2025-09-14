import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "disconnect_whatsapp_api_chila_whatsapp_disconnect_post",
  "toolDescription": "Disconnect Whatsapp",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/whatsapp/disconnect",
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