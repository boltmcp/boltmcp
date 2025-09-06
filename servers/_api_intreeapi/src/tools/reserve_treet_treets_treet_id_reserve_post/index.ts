import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reserve_treet_treets_treet_id_reserve_post",
  "toolDescription": "Reserve Treet",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}/reserve",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "treet_id": "treet_id"
    },
    "body": {
      "expiry_time_minutes": "expiry_time_minutes",
      "send_notifications": "send_notifications",
      "error_on_existing_reservation": "error_on_existing_reservation",
      "save_treet": "save_treet"
    }
  },
  inputParamsSchema
}

export default tool