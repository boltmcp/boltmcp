import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_leads_api_chila_leads_chila_id_get",
  "toolDescription": "Get Leads",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/leads/{chila_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "chila_id": "chila_id"
    },
    "query": {
      "page": "page",
      "limit": "limit"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool