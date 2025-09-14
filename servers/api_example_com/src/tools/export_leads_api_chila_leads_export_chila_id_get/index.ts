import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "export_leads_api_chila_leads_export_chila_id_get",
  "toolDescription": "Export Leads",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/leads/export/{chila_id}",
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