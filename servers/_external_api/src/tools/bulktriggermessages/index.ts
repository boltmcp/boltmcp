import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulktriggermessages",
  "toolDescription": "Trigger a batch of distributed messages",
  "baseUrl": "/external-api",
  "path": "/v1/bulk-trigger-messages/{campaignId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "campaignId": "campaignId"
    },
    "query": {
      "action": "action",
      "sendAt": "sendAt",
      "shouldResumeAfterQuietHours": "shouldResumeAfterQuietHours"
    },
    "body": {
      "data": "data"
    }
  },
  inputParamsSchema
}

export default tool