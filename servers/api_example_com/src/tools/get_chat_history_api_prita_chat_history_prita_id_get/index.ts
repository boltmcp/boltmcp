import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_chat_history_api_prita_chat_history_prita_id_get",
  "toolDescription": "Get Chat History",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/chat-history/{prita_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
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