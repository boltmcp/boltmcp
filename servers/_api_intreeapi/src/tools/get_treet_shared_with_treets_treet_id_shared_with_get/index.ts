import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_treet_shared_with_treets_treet_id_shared_with_get",
  "toolDescription": "Get Treet Shared With",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treets/{treet_id}/shared-with",
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
    "path": {
      "treet_id": "treet_id"
    },
    "query": {
      "limit": "limit",
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool