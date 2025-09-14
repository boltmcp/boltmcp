import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "export_chat_history_api_chila_chat_history_export_chila_id_get",
  "toolDescription": "Export Chat History",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/chat-history/export/{chila_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chila_id": "chila_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool