import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_leads_api_prita_leads_prita_id_get",
  "toolDescription": "Get Leads",
  "baseUrl": "https://api.example.com",
  "path": "/api/prita/leads/{prita_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "prita_id": "prita_id"
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