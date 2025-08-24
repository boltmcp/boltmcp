import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_search_simple_",
  "toolDescription": "Search for documents matching a specified text query",
  "baseUrl": "https://{host}:{port}",
  "path": "/search/simple/",
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
    "query": {
      "query": "query",
      "contextLength": "contextLength"
    }
  },
  inputParamsSchema
}

export default tool