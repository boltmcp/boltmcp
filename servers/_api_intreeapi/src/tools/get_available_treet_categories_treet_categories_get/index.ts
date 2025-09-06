import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_treet_categories_treet_categories_get",
  "toolDescription": "Get Available Treet Categories",
  "baseUrl": "/api/intreeapi",
  "path": "/treet/v1.0/treet-categories",
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
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool