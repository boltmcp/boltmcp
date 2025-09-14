import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_withdrawal_status_api_manajemen_penarikan_requests_reques",
  "toolDescription": "Update Withdrawal Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/manajemen-penarikan/requests/{request_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "request_id": "request_id"
    },
    "body": {
      "status": "status"
    },
    "header": {
      "authorization": "authorization"
    }
  },
  inputParamsSchema
}

export default tool