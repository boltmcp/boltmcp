import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "share_treet_batch_shares_post",
  "toolDescription": "Share Treet",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/batch/shares",
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
      "treet_ids": "treet_ids",
      "user_ids": "user_ids"
    }
  },
  inputParamsSchema
}

export default tool