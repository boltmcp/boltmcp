import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_pending_biz_applications_old_biz_applications_pending_get",
  "toolDescription": "Get Pending Biz Applications Old",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/biz-applications/pending",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "token": "token",
      "embed_business": "embed_business"
    }
  },
  inputParamsSchema
}

export default tool