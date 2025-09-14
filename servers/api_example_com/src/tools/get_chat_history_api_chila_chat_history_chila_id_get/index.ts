import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_chat_history_api_chila_chat_history_chila_id_get",
  "toolDescription": "Get Chat History",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/chat-history/{chila_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chila_id": "chila_id"
    },
    "query": {
      "page": "page",
      "limit": "limit",
      "customer_number": "customer_number"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool