import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reserve_treet_web_web_treets_treet_id_reserve_post",
  "toolDescription": "Reserve Treet Web",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/web/treets/{treet_id}/reserve",
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
    "path": {
      "treet_id": "treet_id"
    },
    "body": {
      "invite_link_id": "invite_link_id"
    }
  },
  inputParamsSchema
}

export default tool