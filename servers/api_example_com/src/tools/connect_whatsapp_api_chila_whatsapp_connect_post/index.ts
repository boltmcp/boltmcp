import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "connect_whatsapp_api_chila_whatsapp_connect_post",
  "toolDescription": "Connect Whatsapp",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/whatsapp/connect",
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