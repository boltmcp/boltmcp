import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "triggermessages",
  "toolDescription": "Trigger a batch of instant messages",
  "baseUrl": "/external-api",
  "path": "/v1/trigger-messages/{campaignId}",
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
      "action": "action"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool