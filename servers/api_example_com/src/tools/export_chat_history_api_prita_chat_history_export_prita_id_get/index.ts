import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "export_chat_history_api_prita_chat_history_export_prita_id_get",
  "toolDescription": "Export Chat History",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/chat-history/export/{prita_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool