import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_chila_renewal_status_api_chila_update_renewal_post",
  "toolDescription": "Update Chila Renewal Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/chila/update-renewal",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "urutan": "urutan",
      "auto_renewal_status": "auto_renewal_status"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool