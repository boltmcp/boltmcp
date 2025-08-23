import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_trigger_message_campaignid_",
  "toolDescription": "Trigger an instant message",
  "baseUrl": "/external-api",
  "path": "/v1/trigger-message/{campaignId}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "campaignId": "campaignId"
    },
    "query": {
      "numberLookup": "numberLookup"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool