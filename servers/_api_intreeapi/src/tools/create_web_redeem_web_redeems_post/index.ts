import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_web_redeem_web_redeems_post",
  "toolDescription": "Create Web Redeem",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/web/redeems",
  "method": "post",
  "security": [
    {
      "key": "X-Simple-Token",
      "value": "<mcp-env-var>X_SIMPLE_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_SIMPLE_TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "booking_event_id": "booking_event_id",
      "booking_name": "booking_name",
      "invite_link_id": "invite_link_id",
      "reservation_id": "reservation_id"
    }
  },
  inputParamsSchema
}

export default tool