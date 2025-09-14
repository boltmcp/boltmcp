import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_whatsapp_status_api_chila_whatsapp_status_get",
  "toolDescription": "Get Whatsapp Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/whatsapp/status",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "urutan": "urutan"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool