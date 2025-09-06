import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_biz_categories_biz_categories_get",
  "toolDescription": "Get Available Biz Categories",
  "baseUrl": "/api/intreeapi",
  "path": "/app/v1.0/biz-categories",
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