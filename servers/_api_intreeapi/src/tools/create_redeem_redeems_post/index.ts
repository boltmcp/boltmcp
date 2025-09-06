import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_redeem_redeems_post",
  "toolDescription": "Create Redeem",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/redeems",
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
    "body": {
      "booking_event_id": "booking_event_id",
      "booking_name": "booking_name",
      "treet_id": "treet_id"
    }
  },
  inputParamsSchema
}

export default tool