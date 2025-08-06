import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_kb_kb_uuid_search",
  "toolDescription": "Main search query",
  "baseUrl": "https://virtserver.swaggerhub.com/nuclia/nucliadb/1.0.0",
  "path": "/kb/{kb_uuid}/search",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "kb_uuid": "kb_uuid"
    },
    "query": {
      "q": "q",
      "filter": "filter",
      "order": "order",
      "v": "v",
      "rid": "rid",
      "disable": "disable",
      "enable": "enable"
    }
  },
  inputParamsSchema
}

export default tool